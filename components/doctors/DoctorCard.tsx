import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";

interface Props {
  name: string;
  specialty: string;
  image: string;
}

export default function DoctorCard({
  name,
  specialty,
  image,
}: Props) {
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

          {/* کد نظام */}
          <div className="flex items-center gap-2 text-sm mb-3">
            <span>کد نظام پزشکی:</span>
            <span className="font-bold">40333</span>
          </div>

          {/* نام */}
          <h2 className="text-xl font-bold">
            {name}
          </h2>

          {/* تخصص */}
          <p className="text-gray-500 mt-2">
            {specialty}
          </p>

          {/* امتیاز */}
          <div className="flex items-center gap-1 mt-3">
            {[1,2,3,4,5].map((item)=>(
              <FaStar
                key={item}
                className="text-yellow-400"
              />
            ))}

            <span className="text-gray-400 text-sm mr-2">
              (105 نظر)
            </span>
          </div>

          {/* آدرس */}
          <div className="flex items-center gap-2 mt-5 text-gray-600">

            <FaLocationDot />

            <span>
              آدرس مطب: تهران، خیابان آزادی، ساختمان پزشکان
            </span>

          </div>

          {/* زمان */}
          <div className="flex items-center gap-2 mt-3 text-gray-600">

            <LuClock3 />

            <span>
              اولین نوبت در دسترس: دوشنبه ۲۳ دی
            </span>

          </div>

          {/* دکمه ها */}
          <div className="flex gap-4 mt-6">

            <button className="flex-1 border rounded-xl py-3 hover:bg-gray-50">
              مشاهده پروفایل
            </button>

            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3">
              رزرو نوبت
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}