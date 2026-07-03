import db from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {

    const { name, email, password } = await request.json();

    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      return Response.json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users(name,email,password) VALUES(?,?,?)",
      [name, email, hashedPassword]
    );

    return Response.json({
      success: true,
      message: "User Registered Successfully",
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      success: false,
      message: "Server Error",
    });

  }
}