export default function Technology() {
  return (
    <section className="container mx-auto py-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            تکنولوژی در خدمت سلامت
          </h2>

          <p className="text-gray-600 leading-8">
            ما با استفاده از فناوری‌های روز،
            فرآیند رزرو نوبت پزشکان را ساده کرده‌ایم.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/about/mobile.png"
            alt=""
          />
        </div>

      </div>

    </section>
  );
}