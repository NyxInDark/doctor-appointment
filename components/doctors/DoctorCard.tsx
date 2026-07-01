"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";
import { useState } from "react";
import AppointmentModal from "../appointment/AppointmentModal";

interface Props {
  id: number;
  name: string;
  specialty: string;
  image: string;
}

export default function DoctorCard({ id, name, specialty, image }: Props) {
  // ۱. تعریف استیت برای باز و بسته کردن مودال رزرو
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex flex-row-reverse gap-6">
        {/* عکس */}
        <div>
          <Image
            src={image}
            alt={name}
            width={140}
            height={140}
            className="rounded-xl object-cover"
          />
        </div>

        {/* اطلاعات */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm mb-3">
            <span>کد نظام پزشکی:</span>
            <span className="font-bold">{40000 + id}</span>
          </div>

          <h2 className="text-xl font-bold">{name}</h2>

          <p className="text-gray-500 mt-2">{specialty}</p>

          <div className="flex items-center gap-1 mt-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <FaStar key={item} className="text-yellow-400" />
            ))}
            <span className="text-gray-400 text-sm mr-2">(105 نظر)</span>
          </div>

          <div className="flex items-center gap-2 mt-5 text-gray-600">
            <FaLocationDot />
            <span>آدرس مطب: تهران، خیابان آزادی، ساختمان پزشکان</span>
          </div>

          <div className="flex items-center gap-2 mt-3 text-gray-600">
            <LuClock3 />
            <span>اولین نوبت در دسترس: دوشنبه ۲۳ دی</span>
          </div>

          <div className="flex gap-4 mt-6">
            <Link
              href={`/doctors/${id}`}
              className="flex-1 border rounded-xl py-3 text-center hover:bg-gray-50"
            >
              مشاهده پروفایل
            </Link>

            {/* ۲. تغییر setOpen به setIsOpen */}
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-600 text-white rounded-lg px-6 py-2"
            >
              رزرو نوبت
            </button>
          </div>
        </div>
      </div>

      
      <AppointmentModal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  doctorId={id}
  doctorName={name}
  specialty={specialty}
/>
    </div>
  );
}