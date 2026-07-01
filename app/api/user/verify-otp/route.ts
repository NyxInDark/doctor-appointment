import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { verifyOTP } from "@/lib/otp";
import { signToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const { phone, code } = await req.json();

    const isValid = verifyOTP(phone, code);
    if (!isValid) {
      return NextResponse.json({ message: "کد وارد شده اشتباه یا منقضی شده است" }, { status: 400 });
    }

    await connectDB();
    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json({ message: "کاربر یافت نشد" }, { status: 404 });
    }

    const token = signToken({ id: user._id.toString(), role: "user", phone });

    const response = NextResponse.json({ message: "ورود موفق", user });
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
  }
}