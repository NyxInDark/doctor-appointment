'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <section
      dir="rtl"
      className="relative flex min-h-screen w-full flex-col items-center justify-start gap-6 overflow-hidden bg-white px-6 py-10 md:flex-row md:justify-end md:gap-[44px] md:px-16"
      style={{ fontFamily: "'Vazirmatn', system-ui, sans-serif" }}
    >
      {/* تصویر خطا */}
      <div className="relative flex h-[260px] w-[280px] items-center justify-center sm:h-[336px] sm:w-[358px] md:order-1 md:h-[600px] md:w-[640px] lg:h-[738px] lg:w-[788px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/error-404.png"
          alt="صفحه مورد نظر یافت نشد"
          className="h-full w-full object-contain"
          onError={(e) => {
            // اگر فایل عکس هنوز در public/images قرار نگرفته باشد،
            // به‌جای کرش کردن صفحه، خود تگ img را پنهان می‌کنیم.
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* متن و دکمه */}
      <div className="flex w-full max-w-[358px] flex-col items-center gap-4 text-center md:order-2 md:max-w-[531px] md:items-end md:gap-[24px] md:text-right">
        <h2 className="text-lg font-medium leading-7 text-black md:text-2xl md:leading-[38px]">
          صفحه مورد نظر در دسترس نیست!
        </h2>

        <h3 className="text-base font-medium leading-[120%] text-[#454545] md:text-xl">
          دسترسی خود به اینترنت را بررسی کنید!
        </h3>

        <Link
          href="/"
          className="flex h-10 min-w-[120px] items-center justify-center gap-1.5 rounded-lg border border-[#4179F0] px-2.5 py-2.5 text-[13px] font-medium text-[#4179F0] transition-colors hover:bg-[#4179F0]/5 md:text-sm"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </section>
  );
}