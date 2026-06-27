import { FaStar } from "react-icons/fa";
import AnimatedSection from "../ui/AnimatedSection";

const reviews = [
  {
    name: "علی محمدی",
    text: "تجربه بسیار خوبی داشتم.",
  },
  {
    name: "زهرا احمدی",
    text: "پزشکان حرفه‌ای و پاسخگو.",
  },
  {
    name: "مهدی رضایی",
    text: "فرآیند رزرو بسیار ساده بود.",
  },
];

export default function Testimonials() {
  return (
    <AnimatedSection>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              نظرات کاربران
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl duration-300"
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

                <h4 className="mt-5 font-bold">
                  {review.name}
                </h4>
              </div>
            ))}

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}