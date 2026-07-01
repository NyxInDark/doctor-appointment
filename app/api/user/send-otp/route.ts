import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { generateOTP, saveOTP } from "@/lib/otp";

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone || phone.length < 10) {
      return NextResponse.json({ message: "شماره موبایل معتبر نیست" }, { status: 400 });
    }

    await connectDB();

    let user = await User.findOne({ phone });
    if (!user) {
      user = await User.create({ phone });
    }

    const otp = generateOTP();
    saveOTP(phone, otp);

    // در محیط واقعی اینجا SMS ارسال میشه
    console.log(`OTP for ${phone}: ${otp}`);

    return NextResponse.json({ message: "کد تایید ارسال شد", otp }); // otp رو در production حذف کن
  } catch (error) {
    return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
  }
}