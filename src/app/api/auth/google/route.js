import { NextResponse } from 'next/server';
import { getUsersCollection } from '@/models/User';
import { generateToken } from '@/lib/jwt';

// Google OAuth configuration
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.NEXTAUTH_URL 
  ? `${process.env.NEXTAUTH_URL}/api/auth/google/callback`
  : 'http://localhost:3000/api/auth/google/callback';

// Generate Google OAuth URL
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    if (action === 'init') {
      // Generate state for CSRF protection
      const state = Math.random().toString(36).substring(7);
      
      const googleAuthUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
      googleAuthUrl.searchParams.set('client_id', GOOGLE_CLIENT_ID);
      googleAuthUrl.searchParams.set('redirect_uri', REDIRECT_URI);
      googleAuthUrl.searchParams.set('response_type', 'code');
      googleAuthUrl.searchParams.set('scope', 'openid email profile');
      googleAuthUrl.searchParams.set('state', state);
      googleAuthUrl.searchParams.set('access_type', 'offline');
      googleAuthUrl.searchParams.set('prompt', 'consent');

      return NextResponse.json({ 
        url: googleAuthUrl.toString(),
        state 
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('Google OAuth error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Handle Google OAuth callback
export async function POST(request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json({ error: 'Authorization code required' }, { status: 400 });
    }

    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokens = await tokenResponse.json();

    if (tokens.error) {
      return NextResponse.json({ error: tokens.error_description || 'Failed to get tokens' }, { status: 400 });
    }

    // Get user info from Google
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    const googleUser = await userInfoResponse.json();

    if (!googleUser.email) {
      return NextResponse.json({ error: 'Failed to get user info' }, { status: 400 });
    }

    // Find or create user in database
    const usersCollection = await getUsersCollection();
    let user = await usersCollection.findOne({ email: googleUser.email });

    if (!user) {
      // Create new user
      const newUser = {
        name: googleUser.name,
        email: googleUser.email,
        googleId: googleUser.id,
        avatar: googleUser.picture,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await usersCollection.insertOne(newUser);
      user = { ...newUser, _id: result.insertedId };
    } else {
      // Update existing user with Google info
      await usersCollection.updateOne(
        { _id: user._id },
        {
          $set: {
            googleId: googleUser.id,
            avatar: googleUser.picture,
            updatedAt: new Date(),
          },
        }
      );
    }

    // Generate JWT token
    const token = generateToken(user);

    return NextResponse.json({
      success: true,
      message: 'Google sign in successful',
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });

  } catch (error) {
    console.error('Google callback error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}