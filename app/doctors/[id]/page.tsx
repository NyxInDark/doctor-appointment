import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";

export default async function DoctorProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="bg-gray-50 min-h-screen py-10">

      <div className="container mx-auto px-6">

        {/* کارت اصلی */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">

          <div className="flex flex-row-reverse gap-8">

            <Image
              src="/images/doctors/doc1.jpg"
              alt="doctor"
              width={220}
              height={220}
              className="rounded-2xl"
            />

            <div className="flex-1">

              <div className="text-gray-400 mb-3">
                کد پزشک: {id}
              </div>

              <h1 className="text-3xl font-bold">
                دکتر وارسته
              </h1>

              <p className="text-gray-500 mt-3">
                متخصص قلب و عروق
              </p>

              <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map((i)=>(
                  <FaStar
                    key={i}
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 mt-6">
                <FaLocationDot />
                تهران، خیابان آزادی
              </div>

              <div className="flex items-center gap-2 mt-3">
                <LuClock3 />
                اولین نوبت: دوشنبه
              </div>

              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl mt-8">
                رزرو نوبت
              </button>

            </div>

          </div>

        </div>

        {/* درباره پزشک */}
        <div className="bg-white rounded-3xl p-8 mt-8">

          <h2 className="text-2xl font-bold mb-5">
            درباره پزشک
          </h2>

          <p className="text-gray-600 leading-9">
            دکتر وارسته دارای بیش از ۱۵ سال سابقه
            در زمینه قلب و عروق بوده و در
            بیمارستان‌های معتبر فعالیت داشته‌اند.
          </p>

        </div>

        {/* سوابق */}
        <div className="bg-white rounded-3xl p-8 mt-8">

          <h2 className="text-2xl font-bold mb-5">
            سوابق و افتخارات
          </h2>

          <ul className="space-y-3">
            <li>✔ متخصص قلب و عروق</li>
            <li>✔ عضو انجمن قلب ایران</li>
            <li>✔ بیش از ۱۰۰۰ بیمار موفق</li>
          </ul>

        </div>

      </div>

    </main>
  );
}