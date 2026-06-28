"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function DoctorFilter() {
  const [specialties] = useState([
    "قلب و عروق",
    "پوست",
    "جراحی",
    "چشم",
    "گوش و حلق",
  ]);

  const [cities] = useState([
    "تهران",
    "اصفهان",
    "شیراز",
    "تبریز",
  ]);

  return (
    <aside className="bg-white rounded-2xl border p-6 sticky top-24">

      {/* عنوان */}
      <div className="flex justify-between mb-6">
        <h2 className="font-bold text-lg">
          فیلترها
        </h2>

        <button className="text-blue-600 text-sm">
          حذف همه
        </button>
      </div>

      {/* سرچ */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="جستجوی پزشک"
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* تخصص */}
      <div className="border-t py-5">

        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">
            تخصص ها
          </h3>
          <FaChevronDown />
        </div>

        <div className="space-y-3">
          {specialties.map((item) => (
            <label
              key={item}
              className="flex items-center gap-3"
            >
              <input type="checkbox" />
              <span>{item}</span>
            </label>
          ))}
        </div>

      </div>

      {/* بیمه */}
      <div className="border-t py-5">

        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">
            بیمه
          </h3>
          <FaChevronDown />
        </div>

        <select className="w-full border rounded-xl p-3">
          <option>تامین اجتماعی</option>
          <option>سلامت</option>
          <option>آزاد</option>
        </select>

      </div>

      {/* شهر */}
      <div className="border-t py-5">

        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">
            شهر
          </h3>
          <FaChevronDown />
        </div>

        <div className="space-y-3">
          {cities.map((city) => (
            <label
              key={city}
              className="flex items-center gap-3"
            >
              <input type="checkbox" />
              <span>{city}</span>
            </label>
          ))}
        </div>

      </div>

      {/* جنسیت */}
      <div className="border-t py-5">

        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">
            جنسیت پزشک
          </h3>
          <FaChevronDown />
        </div>

        <div className="space-y-3">

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>آقا</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>خانم</span>
          </label>

        </div>

      </div>

      {/* دکمه */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-xl mt-6">
        اعمال فیلترها
      </button>

    </aside>
  );
}