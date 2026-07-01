"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FaCamera, FaCalendarAlt, FaClock, FaStethoscope } from "react-icons/fa";

interface Appointment {
  _id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: string;
}

export default function ProfilePage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loadingAppointments, setLoadingAppointments] = useState(true);

  const [form, setForm] = useState({
    firstName: "فرنوش",
    lastName: "آسایش",
    nationalCode: "398594958",
    birthYear: "1380/6/5",
    gender: "خانم",
    city: "تهران",
    phone: "09199041987",
    email: "",
  });

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("/api/appointments/my");
        if (res.ok) {
          const data = await res.json();
          setAppointments(data.appointments);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingAppointments(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("اطلاعات با موفقیت ذخیره شد");
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen py-10" dir="rtl">
        <div className="container mx-auto px-6 max-w-3xl">

          <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">پروفایل کاربری</h1>

          <div className="bg-white rounded-3xl shadow-sm p-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                  <span className="text-blue-400 text-4xl">👤</span>
                </div>
                <button className="absolute bottom-0 left-0 bg-blue-600 text-white rounded-full p-1.5 hover:bg-blue-700 transition">
                  <FaCamera size={12} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-500 mb-1">نام</label>
                <input name="firstName" value={form.firstName} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">نام خانوادگی</label>
                <input name="lastName" value={form.lastName} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">کد ملی</label>
                <input name="nationalCode" value={form.nationalCode} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">سال تولد</label>
                <input name="birthYear" value={form.birthYear} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">جنسیت</label>
                <select name="gender" value={form.gender} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800 bg-white">
                  <option value="خانم">خانم</option>
                  <option value="آقا">آقا</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">شهر</label>
                <input name="city" value={form.city} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">شماره موبایل</label>
                <input name="phone" value={form.phone} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">ایمیل</label>
                <input name="email" value={form.email} onChange={handleChange}
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800" />
              </div>
            </div>

            <div className="mt-8 flex justify-start">
              <button onClick={handleSubmit}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-bold">
                ویرایش اطلاعات
              </button>
            </div>
          </div>

          {/* نوبت‌های رزرو شده */}
          <div className="bg-white rounded-3xl shadow-sm p-8 mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">نوبت‌های رزرو شده</h2>

            {loadingAppointments ? (
              <p className="text-gray-400 text-center py-6">در حال بارگذاری...</p>
            ) : appointments.length === 0 ? (
              <p className="text-gray-400 text-center py-6">هنوز نوبتی رزرو نکرده‌اید.</p>
            ) : (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment._id}
                    className="border border-gray-100 rounded-2xl p-5 flex items-center justify-between bg-gray-50/50">
                    <div>
                      <div className="flex items-center gap-2 font-bold text-gray-800">
                        <FaStethoscope className="text-blue-600" />
                        {appointment.doctorName}
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{appointment.specialty}</p>
                      <span className={`text-xs mt-2 inline-block px-2 py-1 rounded-full ${
                        appointment.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {appointment.status === "confirmed" ? "تایید شده" : "در انتظار"}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-500" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-500" />
                        {appointment.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}