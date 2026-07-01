"use client";
import Image from "next/image";
import { FaStar, FaInstagram, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";
import { doctors } from "@/data/doctors";
import { notFound, useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { DateObject } from "react-multi-date-picker";
import PersianCalendar from "@/components/appointment/PersianCalendar";
import TimeSlots from "@/components/appointment/TimeSlots";
import { useAuth } from "@/context/AuthContext";
import { useAppointments } from "@/context/AppointmentContext";

interface MessageState {
  text: string;
  type: "success" | "error" | null;
}

export default function DoctorProfile() {
  const params = useParams();
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const { addAppointment, isAlreadyBooked } = useAppointments();
  const id = params.id as string;
  const doctor = doctors.find((d) => d.id === Number(id));

  const [selectedDate, setSelectedDate] = useState<DateObject | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState<MessageState>({ text: "", type: null });

  if (!doctor) {
    notFound();
  }

  const handleReservation = () => {
    if (!isLoggedIn) {
      setMessage({ text: "ابتدا وارد حساب کاربری خود شوید", type: "error" });
      setTimeout(() => router.push("/login"), 1500);
      return;
    }

    if (!selectedDate || !selectedTime) {
      setMessage({ text: "لطفاً ابتدا تاریخ و ساعت نوبت خود را انتخاب کنید.", type: "error" });
      return;
    }

    const dateStr = selectedDate.format("YYYY/MM/DD");

    if (isAlreadyBooked(doctor.id, dateStr, selectedTime)) {
      setMessage({ text: "شما قبلاً این نوبت را رزرو کرده‌اید", type: "error" });
      return;
    }

    addAppointment({
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      date: dateStr,
      time: selectedTime,
    });

    setMessage({ text: "نوبت شما با موفقیت رزرو شد", type: "success" });
  };

  return (
    <main className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex flex-row-reverse gap-8">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={160}
                  height={160}
                  className="rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <div className="text-gray-400 mb-2 text-sm">
                    کد پزشک: {40000 + doctor.id}
                  </div>
                  <h1 className="text-2xl font-bold">{doctor.name}</h1>
                  <p className="text-gray-500 mt-2">{doctor.specialty}</p>
                  <div className="flex gap-1 mt-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm">
                    <FaLocationDot />
                    {doctor.address}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                    <LuClock3 />
                    اولین نوبت: {doctor.firstAppointment}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-4">درباره پزشک</h2>
              <p className="text-gray-600 leading-9">{doctor.about}</p>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-4">سوابق و افتخارات</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✔ {doctor.specialty}</li>
                <li>✔ عضو انجمن تخصصی مرتبط</li>
                <li>✔ بیش از ۱۰۰۰ بیمار موفق</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-4">راه‌های ارتباطی</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaInstagram className="text-pink-500 text-xl" />
                  <span className="text-sm">instagram.com/{doctor.instagram}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaPhoneAlt className="text-blue-500 text-xl" />
                  <span className="text-sm">{doctor.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaGlobe className="text-green-500 text-xl" />
                  <span className="text-sm">{doctor.website}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-5">نظرات کاربران</h2>
              <div className="space-y-5">
                {doctor.reviews.map((review, i) => (
                  <div key={i} className="border-b last:border-none pb-5 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800">{review.name}</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, idx) => (
                          <FaStar key={idx} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-7">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div>
            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
              <h2 className="font-bold text-lg text-gray-800 mb-4">تقویم</h2>

              {message.type && (
                <div
                  className={`w-full py-3 px-4 rounded-xl text-center text-sm font-bold mb-4 transition-all duration-300 ${
                    message.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <div className="border border-gray-100 rounded-2xl p-2 mb-4 bg-gray-50/50">
                <PersianCalendar value={selectedDate} onChange={setSelectedDate} />
              </div>

              <div className="mb-6">
                <TimeSlots value={selectedTime} onChange={setSelectedTime} />
              </div>

              <button
                onClick={handleReservation}
                className="w-full h-12 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
              >
                رزرو نوبت
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}