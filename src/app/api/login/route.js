// // app/api/login/route.js
// import connectDB from "@/lib/mongodb";
// import User from "@/models/User";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { email, password } = await req.json();

//     const user = await User.findOne({ email });

//     if (!user) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
//     }

//     // We'll add JWT here in the next step
//     return NextResponse.json({ message: "Login successful", user }, { status: 200 });

//   } catch (error) {
//     console.error("Login error:", error);
//     return NextResponse.json({ message: "Server error" }, { status: 500 });
//   }
// }
// app/api/login/route.js
// app/api/login/route.js
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // ✅ Import JWT

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // 🔐 Use .env

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // ✅ Create JWT token with user ID and email
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: "7d" } // ⏳ optional: token valid for 7 days
    );

    // ✅ Return token with response
    return NextResponse.json(
      {
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}



