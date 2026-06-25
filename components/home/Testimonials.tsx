import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "علی محمدی",
    text: "تجربه بسیار خوبی داشتم. رزرو نوبت خیلی سریع انجام شد.",
  },
  {
    name: "زهرا احمدی",
    text: "پزشک بسیار حرفه‌ای بود و پشتیبانی سایت عالی بود.",
  },
  {
    name: "مهدی رضایی",
    text: "به راحتی پزشک مورد نظرم را پیدا کردم.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            نظرات بیماران
          </h2>

          <p className="text-gray-500 mt-3">
            تجربه کاربران از خدمات ما
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 text-yellow-500 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-8">
                {review.text}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100"></div>

                <div>
                  <h4 className="font-semibold">
                    {review.name}
                  </h4>

                  <span className="text-sm text-gray-400">
                    بیمار
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}