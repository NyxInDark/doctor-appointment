import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "لطفاً وارد حساب کاربری شوید" },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        { message: "توکن نامعتبر است" },
        { status: 401 }
      );
    }

    await connectDB();

    const appointments = await Appointment.find({
      userId: payload.id,
    }).sort({ createdAt: -1 });

    const allAppointments = await Appointment.find().limit(5);

    return NextResponse.json({
      payload,
      searchedUserId: payload.id,
      foundCount: appointments.length,
      appointments,
      sampleAppointments: allAppointments,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "خطای سرور" },
      { status: 500 }
    );
  }
}