import { signToken } from '../../utils/auth.js';

/*
  A real app would:
  1) Fetch user from DB by email
  2) Compare hashed password
  3) On success, issue JWT
*/
export async function post({ request }) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Missing email or password' }), { status: 400 });
    }
    // Stub user check
    // In production, you’d check the DB:
    // if no user or password mismatch => return 401
    // else sign token

    const token = signToken({ email });

    // Setting the HttpOnly, Secure cookie
    // Expires is optional (token itself has an expiry)
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Set-Cookie': `auth_token=${token}; HttpOnly; Secure; Path=/; SameSite=Strict;`
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}