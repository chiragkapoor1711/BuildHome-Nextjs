import { NextResponse } from "next/server";
import { verifyTokenEdge } from "@/utils/jwt";

export async function middleware(request) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const user = await verifyTokenEdge(token);
    console.log("Verified User:", user);
    return NextResponse.next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/product/:path*", "/admin/:path*"],
};