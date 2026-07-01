import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import WorkingHours from "@/models/WorkingHours";
import { verifyToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ message: "غیرمجاز" }, { status: 401 });

    const payload = verifyToken(token);
    if (!payload || payload.role !== "doctor") {
      return NextResponse.json({ message: "دسترسی غیرمجاز" }, { status: 403 });
    }

    const { dayOfWeek, startTime, endTime, slotDuration } = await req.json();

    await connectDB();

    const workingHours = await WorkingHours.create({
      doctorId: payload.id,
      dayOfWeek,
      startTime,
      endTime,
      slotDuration,
    });

    return NextResponse.json({ message: "زمان کاری ثبت شد", workingHours }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ message: "غیرمجاز" }, { status: 401 });

    const payload = verifyToken(token);
    if (!payload || payload.role !== "doctor") {
      return NextResponse.json({ message: "دسترسی غیرمجاز" }, { status: 403 });
    }

    await connectDB();
    const hours = await WorkingHours.find({ doctorId: payload.id });

    return NextResponse.json({ hours });
  } catch (error) {
    return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
  }
}