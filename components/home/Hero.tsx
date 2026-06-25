export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">

              <div className="absolute -top-5 -right-5 w-24 h-24 bg-blue-100 rounded-full"></div>

              <div className="absolute bottom-5 -left-5 w-16 h-16 bg-blue-200 rounded-full"></div>

              <div className="h-[500px] w-[450px] rounded-[40px] bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-xl">
                <span className="text-gray-500">
                  تصویر پزشکان
                </span>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-right">

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm mb-5">
              بهترین سیستم رزرو پزشک
            </span>

            <h1 className="text-5xl font-bold leading-[80px] text-gray-900">
              سلامت شما
              <br />
              رسالت ما
            </h1>

            <p className="text-gray-600 mt-6 leading-8 max-w-xl">
              بهترین پزشکان را پیدا کنید و به صورت آنلاین
              نوبت رزرو کنید. سریع، مطمئن و بدون انتظار.
            </p>

            <div className="mt-8 flex gap-4 justify-center lg:justify-start">

              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
                رزرو نوبت
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-50 transition">
                بیشتر بدانید
              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-12">

  <div className="bg-white rounded-2xl shadow-sm p-4">
    <h3 className="text-3xl font-bold text-blue-600">
      +500
    </h3>

    <p className="text-gray-500">
      پزشک متخصص
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-sm p-4">
    <h3 className="text-3xl font-bold text-blue-600">
      +10K
    </h3>

    <p className="text-gray-500">
      بیمار فعال
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-sm p-4">
    <h3 className="text-3xl font-bold text-blue-600">
      +50
    </h3>

    <p className="text-gray-500">
      تخصص پزشکی
    </p>
  </div>

</div>
          </div>

        </div>
      </div>
    </section>
  );
}