export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-md h-[450px] bg-blue-100 rounded-[40px] flex items-center justify-center">
              <span className="text-gray-500">
                تصویر پزشکان
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-right">

            <h1 className="text-5xl font-bold leading-[80px] text-gray-900">
              سلامت شما
              <br />
              رسالت ما
            </h1>

            <p className="text-gray-600 mt-6 leading-8">
              بهترین پزشکان را پیدا کنید و به صورت آنلاین
              نوبت رزرو کنید.
            </p>

            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
                رزرو نوبت
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-50 transition">
                بیشتر بدانید
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}