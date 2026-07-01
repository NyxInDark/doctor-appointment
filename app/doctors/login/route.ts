import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Doctor from "@/models/Doctor";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return NextResponse.json({ message: "ایمیل یا رمز عبور اشتباه است" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return NextResponse.json({ message: "ایمیل یا رمز عبور اشتباه است" }, { status: 401 });
    }

    const token = signToken({ id: doctor._id.toString(), role: "doctor", phone: doctor.phone });

    const response = NextResponse.json({ message: "ورود موفق", doctor });
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