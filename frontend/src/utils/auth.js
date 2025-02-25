import jwt from 'jsonwebtoken';

// In production, store your secret in an environment variable.
const JWT_SECRET = process.env.JWT_SECRET || 'SUPER_SECURE_SECRET';

export function signToken(payload) {
  // You can set token expiry as needed.
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' });
}

export function verifyToken(token) {
  // This will throw an error if token is invalid or expired.
  return jwt.verify(token, JWT_SECRET);
}