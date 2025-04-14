import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";  // Adjust the path if needed
import connectDB from "@/utils/dbConnect.js"; // Ensure DB connection

export async function POST(req) {
  try {
    await connectDB(); // Ensure the database connection

    const { email, password } = await req.json();

    // Find user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
    }

    // Success - Redirect handled in frontend
    return NextResponse.json({ message: "Login successful", success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
