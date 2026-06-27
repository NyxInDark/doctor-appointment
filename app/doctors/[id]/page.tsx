export default function DoctorPage() {
  return (
    <div className="container mx-auto py-20">

      <div className="grid lg:grid-cols-3 gap-10">

        <div className="bg-gray-100 rounded-3xl h-96"></div>

        <div className="lg:col-span-2">

          <h1 className="text-4xl font-bold">
            دکتر محمد رضایی
          </h1>

          <p className="text-blue-600 mt-4">
            متخصص قلب و عروق
          </p>

          <p className="mt-8 leading-8 text-gray-500">
            توضیحات پزشک...
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl">
            رزرو نوبت
          </button>

        </div>

      </div>

    </div>
  );
}