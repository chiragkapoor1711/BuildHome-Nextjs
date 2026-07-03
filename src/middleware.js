import { NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  console.log("Token:", token);

  if (!token) {
    console.log("No Token");

    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  try {
    const user = verifyToken(token);

    console.log("Verified User:", user);

    return NextResponse.next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);

    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
}

export const config = {
  matcher: [
    "/product/:path*",
    "/admin/:path*",
  ],
};