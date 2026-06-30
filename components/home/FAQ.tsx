"use client";

import { useState } from "react";

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
  { q: "چگونه می‌توانم پزشک مورد نظرم را پیدا کنم؟",
    a: "از طریق بخش جستجو می‌توانید بر اساس نام پزشک، تخصص یا شهر، پزشک مورد نظر خود را پیدا کنید.",
  },
  { q: "آیا می‌توانم برای شخص دیگری نوبت رزرو کنم؟",
    a: "بله، در فرم رزرو نوبت می‌توانید اطلاعات فرد مورد نظر را وارد کرده و نوبت را به نام او ثبت کنید.",
  },
  { q: "چگونه می‌توانم نزدیک‌ترین پزشک به محل سکونت خود را پیدا کنم؟",
    a: "با انتخاب شهر و منطقه خود در بخش جستجو، لیست پزشکانی که نزدیک‌تر به محل سکونت شما هستند نمایش داده می‌شود.",
  },
  { q: "آیا می‌توانم نسخه‌های الکترونیکی خود را از طریق وبسایت دریافت کنم؟",
    a: "بله، پس از پایان ویزیت، نسخه الکترونیکی صادر شده از بخش «نوبت‌های من» در پنل کاربری قابل مشاهده و دریافت است.",
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            سوالات متداول
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full p-6 text-right font-semibold flex justify-between"
              >
                {faq.q}
                <span>
                  {open === index ? "-" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}