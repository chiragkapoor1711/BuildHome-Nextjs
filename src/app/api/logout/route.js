import { NextResponse } from "next/server";

export async function POST(request) {

  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({
      success: false,
      message: "You are not logged in.",
    });
  }

  const response = NextResponse.json({
    success: true,
    message: "Logout Successful",
  });

  response.cookies.delete("token");

  return response;
}