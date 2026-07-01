import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "لاگین نیست" }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ message: "توکن نامعتبر" }, { status: 401 });
    }

    return NextResponse.json({ id: payload.id, phone: payload.phone, role: payload.role });
  } catch {
    return NextResponse.json({ message: "خطای سرور" }, { status: 500 });
  }
}