"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [otpError, setOtpError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [timer, setTimer] = useState(95);
  const [loading, setLoading] = useState(false);
  const [devOtp, setDevOtp] = useState("");

  const handleSendCode = async () => {
    if (phone.length < 10) return;
    setLoading(true);
    try {
      const res = await fetch("/api/user/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.message);
        return;
      }
      setDevOtp(data.otp); // فقط برای تست - در production حذف کن
      setStep("otp");
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) { clearInterval(interval); return 0; }
          return prev - 1;
        });
      }, 1000);
    } catch {
      setErrorMsg("خطای سرور");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError(false);
    setErrorMsg("");
    if (value && index < 4) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length < 5) {
      setOtpError(true);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/user/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code }),
      });
      const data = await res.json();
      if (!res.ok) {
        setOtpError(true);
        setErrorMsg(data.message);
        return;
      }
      login(phone);
      router.push("/profile");
    } catch {
      setErrorMsg("خطای سرور");
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-50" dir="rtl">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-[400px] text-center">

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-3xl">✚</span>
          </div>
        </div>

        <h1 className="text-xl font-bold mb-2 text-gray-800">به دکتر رزرو خوش آمدید</h1>

        {step === "phone" ? (
          <>
            <p className="text-gray-500 text-sm mb-6">برای ادامه شماره موبایل خود را وارد نمایید.</p>
            <label className="block text-right text-sm text-gray-600 mb-1">شماره موبایل</label>
            <input
              type="tel"
              placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 p-3 rounded-xl mb-4 text-right focus:outline-none focus:border-blue-400"
            />
            {errorMsg && <p className="text-red-500 text-sm mb-2">{errorMsg}</p>}
            <button
              onClick={handleSendCode}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "در حال ارسال..." : "دریافت کد تایید"}
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-500 text-sm mb-6">
              کد ارسال شده به شماره {phone} را وارد کنید
            </p>

            {/* فقط برای تست - در production حذف کن */}
            {devOtp && (
              <p className="text-blue-500 text-sm mb-3 bg-blue-50 p-2 rounded-xl">
                کد تست: {devOtp}
              </p>
            )}

            <div className="flex justify-center gap-2 mb-2" dir="ltr">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  className={`w-12 h-12 text-center text-lg border rounded-xl focus:outline-none transition ${
                    otpError
                      ? "border-red-400 text-red-500"
                      : "border-gray-300 focus:border-blue-400"
                  }`}
                />
              ))}
            </div>

            {errorMsg && <p className="text-red-500 text-sm mb-2">{errorMsg}</p>}

            <p className="text-gray-400 text-sm mb-4">
              {timer > 0 ? `${formatTime(timer)} تا دریافت مجدد کد` : "ارسال مجدد کد"}
            </p>

            <button
              onClick={handleVerify}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "در حال بررسی..." : "ورود"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}