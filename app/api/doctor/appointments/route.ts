import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ message: "غیرمجاز" }, { status: 401 });

    const payload = verifyToken(token);
    if (!payload || payload.role !== "doctor") {
      return NextResponse.json({ message: "دسترسی غیرمجاز" }, { status: 403 });
    }

    await connectDB();

    const appointments = await Appointment.find({ doctorId: payload.id })
      .populate("userId", "firstName lastName phone")
      .sort({ date: 1, time: 1 });

    return NextResponse.json({ appointments });
  } catch (error) {
    return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
  }
}