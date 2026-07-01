import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Doctor from "@/models/Doctor";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, specialty, phone, city, address } = await req.json();

    if (!name || !email || !password || !specialty || !phone) {
      return NextResponse.json({ message: "همه فیلدها الزامی هستند" }, { status: 400 });
    }

    await connectDB();

    const existing = await Doctor.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "این ایمیل قبلاً ثبت شده است" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = await Doctor.create({
      name,
      email,
      password: hashedPassword,
      specialty,
      phone,
      city,
      address,
    });

    return NextResponse.json({ message: "ثبت‌نام موفق", doctorId: doctor._id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
  }
}