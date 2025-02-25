import { signToken } from '../../utils/auth.js';

/*
  A real app would:
  1) Save the new user to a database with a hashed password
  2) Possibly check if user already exists
*/
export async function post({ request }) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Missing email or password' }), { status: 400 });
    }

    // TODO: Save user to DB, etc.

    // Provide a success response (no automatic login here, but you could sign them in)
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}