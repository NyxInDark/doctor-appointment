import {
  FaClock,
  FaShieldAlt,
  FaCalendarCheck,
} from "react-icons/fa";

export default function WhyUs() {

  const items = [
    {
      title: "دسترسی ۲۴ ساعته",
      icon: <FaClock />,
    },
    {
      title: "امنیت اطلاعات",
      icon: <FaShieldAlt />,
    },
    {
      title: "مدیریت نوبت",
      icon: <FaCalendarCheck />,
    },
  ];

  return (
    <section className="container mx-auto py-16">

      <h2 className="text-3xl font-bold mb-10">
        چرا کد رزرو؟
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="text-blue-600 text-3xl mb-4">
              {item.icon}
            </div>

            <h3 className="font-bold">
              {item.title}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}