import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(new URL('/login?error=google_auth_failed', request.url));
  }

  if (!code) {
    return NextResponse.redirect(new URL('/login?error=no_code', request.url));
  }

  // The code will be sent back to the client via postMessage
  // This is a simple approach - the actual token exchange happens on the client side
  // for security reasons (to avoid exposing tokens on the server side callback)

  // Return a simple HTML page that posts the code back to the opener
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Signing in...</title>
      </head>
      <body>
        <script>
          window.opener.postMessage({ 
            type: 'googleAuthSuccess', 
            code: '${code}' 
          }, '*');
          window.close();
        </script>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
