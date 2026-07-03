import { NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";

export async function GET(request) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Not Logged In",
        },
        { status: 401 }
      );
    }

    const user = verifyToken(token);

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid Token",
      },
      { status: 401 }
    );
  }
}