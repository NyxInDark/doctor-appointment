"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FaCamera } from "react-icons/fa";

export default function ProfilePage() {
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

            {/* آواتار */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/avatar-default.png"
                    alt="avatar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-blue-400 text-4xl absolute">👤</span>
                </div>
                <button className="absolute bottom-0 left-0 bg-blue-600 text-white rounded-full p-1.5 hover:bg-blue-700 transition">
                  <FaCamera size={12} />
                </button>
              </div>
            </div>

            {/* فرم */}
            <div className="grid grid-cols-2 gap-6">

              <div>
                <label className="block text-sm text-gray-500 mb-1">نام</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">نام خانوادگی:</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">کد ملی:</label>
                <input
                  name="nationalCode"
                  value={form.nationalCode}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">سال تولد:</label>
                <input
                  name="birthYear"
                  value={form.birthYear}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">جنسیت:</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800 bg-white"
                >
                  <option value="خانم">خانم</option>
                  <option value="آقا">آقا</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">شهر:</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">شماره موبایل:</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">ایمیل:</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-800"
                />
              </div>

            </div>

            {/* دکمه ذخیره */}
            <div className="mt-8 flex justify-start">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-bold"
              >
                ویرایش اطلاعات
              </button>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}