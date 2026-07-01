import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Doctor from "@/models/Doctor";
import { verifyToken } from "@/lib/jwt";

export async function PUT(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ message: "غیرمجاز" }, { status: 401 });

    const payload = verifyToken(token);
    if (!payload || payload.role !== "doctor") {
      return NextResponse.json({ message: "دسترسی غیرمجاز" }, { status: 403 });
    }

    const { name, specialty, phone, city, address } = await req.json();

    await connectDB();

    const doctor = await Doctor.findByIdAndUpdate(
      payload.id,
      { name, specialty, phone, city, address },
      { new: true }
    );

    return NextResponse.json({ message: "اطلاعات بروزرسانی شد", doctor });
  } catch (error) {
    return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
  }
}