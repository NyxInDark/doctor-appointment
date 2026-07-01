import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({
      success: true,
      message: "✅ اتصال به MongoDB با موفقیت انجام شد!",
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "❌ اتصال به MongoDB ناموفق بود.",
        error: error instanceof Error ? error.message : "خطای نامشخص",
      },
      { status: 500 }
    );
  }
}