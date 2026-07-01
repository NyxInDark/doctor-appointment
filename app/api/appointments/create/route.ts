import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import { verifyToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "لطفاً وارد حساب کاربری شوید" },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);

    console.log("CREATE payload:", payload);

    if (!payload || payload.role !== "user") {
      return NextResponse.json(
        { message: "دسترسی غیرمجاز" },
        { status: 403 }
      );
    }

    const { doctorId, doctorName, specialty, date, time } =
      await req.json();

    if (!doctorId || !date || !time) {
      return NextResponse.json(
        { message: "اطلاعات ناقص است" },
        { status: 400 }
      );
    }

    await connectDB();

    const existing = await Appointment.findOne({
      userId: payload.id,
      doctorId,
      date,
      time,
    });

    if (existing) {
      return NextResponse.json(
        { message: "شما قبلاً این نوبت را رزرو کرده‌اید" },
        { status: 409 }
      );
    }

    const appointment = await Appointment.create({
      userId: payload.id,
      doctorId,
      doctorName,
      specialty,
      date,
      time,
    });

    console.log("CREATED appointment:", appointment);

    return NextResponse.json(
      {
        message: "نوبت با موفقیت رزرو شد",
        appointment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CREATE ERROR:", error);

    return NextResponse.json(
      { message: "خطای سرور" },
      { status: 500 }
    );
  }
}