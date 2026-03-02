import { NextResponse } from 'next/server';
import { getUsersCollection } from '@/models/User';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const search = searchParams.get('search') || '';

    const usersCollection = await getUsersCollection();

    // Build query
    const query = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    // Get total count
    const total = await usersCollection.countDocuments(query);

    // Get users with pagination
    const users = await usersCollection
      .find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .project({ password: 0, googleId: 0 })
      .toArray();

    // Transform _id to id
    const transformedUsers = users.map(user => ({
      ...user,
      id: user._id.toString(),
      _id: undefined
    }));

    return NextResponse.json({
      success: true,
      users: transformedUsers,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { userId, role } = await request.json();

    if (!userId || !role) {
      return NextResponse.json(
        { error: 'User ID and role are required' },
        { status: 400 }
      );
    }

    // Validate role
    if (!['user', 'admin'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role. Must be user or admin' },
        { status: 400 }
      );
    }

    const usersCollection = await getUsersCollection();

    // Check if user exists
    const { ObjectId } = await import('mongodb');
    const objectId = new ObjectId(userId);
    
    const user = await usersCollection.findOne({ _id: objectId });
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Update user role
    const result = await usersCollection.updateOne(
      { _id: objectId },
      { 
        $set: { 
          role, 
          updatedAt: new Date() 
        } 
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: 'Failed to update user role' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `User role updated to ${role}`
    });

  } catch (error) {
    console.error('Error updating user role:', error);
    return NextResponse.json(
      { error: 'Failed to update user role' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const usersCollection = await getUsersCollection();
    const { ObjectId } = await import('mongodb');
    
    const result = await usersCollection.deleteOne({ _id: new ObjectId(userId) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'User deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
