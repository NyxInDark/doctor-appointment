import {
  FaHeart,
  FaBrain,
  FaTooth,
  FaEye,
  FaBone,
  FaUserNurse,
} from "react-icons/fa";

const specialties = [
  {
    title: "قلب و عروق",
    icon: <FaHeart />,
  },
  {
    title: "مغز و اعصاب",
    icon: <FaBrain />,
  },
  {
    title: "دندانپزشکی",
    icon: <FaTooth />,
  },
  {
    title: "چشم پزشکی",
    icon: <FaEye />,
  },
  {
    title: "ارتوپدی",
    icon: <FaBone />,
  },
  {
    title: "پوست و مو",
    icon: <FaUserNurse />,
  },
];

export default function Specialties() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            تخصص‌های محبوب
          </h2>

          <button className="text-blue-600">
            مشاهده همه
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6 text-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-4 font-medium">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}