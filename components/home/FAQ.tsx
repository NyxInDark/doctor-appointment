const faqs = [
  {
    q: "چگونه نوبت رزرو کنم؟",
    a: "از طریق جستجو پزشک مورد نظر را انتخاب کرده و زمان مناسب را رزرو کنید.",
  },
  {
    q: "آیا امکان لغو نوبت وجود دارد؟",
    a: "بله، از پنل کاربری می‌توانید نوبت خود را لغو کنید.",
  },
  {
    q: "پرداخت به چه صورت انجام می‌شود؟",
    a: "پرداخت به صورت آنلاین و از طریق درگاه بانکی انجام می‌شود.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            سوالات متداول
          </h2>

          <p className="text-gray-500 mt-3">
            پاسخ سوالات پرتکرار کاربران
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border border-gray-200 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-lg">
                {faq.q}
              </h3>

              <p className="text-gray-500 mt-3 leading-8">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}