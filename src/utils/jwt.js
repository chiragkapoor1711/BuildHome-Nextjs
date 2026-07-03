import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";

// --- Node.js runtime (API routes) ---

export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

// --- Edge runtime (middleware) ---

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function verifyTokenEdge(token) {
  const { payload } = await jwtVerify(token, secret);
  return payload; // { id, name, email, iat, exp }
}