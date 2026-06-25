import {
  FaCalendarCheck,
  FaUserMd,
  FaHeadset,
} from "react-icons/fa";

const items = [
  {
    icon: <FaCalendarCheck />,
    title: "نوبت‌دهی آنلاین",
    desc: "رزرو سریع و آسان نوبت پزشک",
  },
  {
    icon: <FaUserMd />,
    title: "بهترین پزشکان",
    desc: "دسترسی به پزشکان متخصص",
  },
  {
    icon: <FaHeadset />,
    title: "پشتیبانی ۲۴ ساعته",
    desc: "همیشه در کنار شما هستیم",
  },
];

export default function Features() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex items-center gap-5"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}