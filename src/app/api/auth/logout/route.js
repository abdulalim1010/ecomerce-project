import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // For JWT-based auth, logout is handled client-side
    // This endpoint can be used for server-side cleanup if needed
    // For now, we just return success since JWT tokens are stateless
    
    return NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
