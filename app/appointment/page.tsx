export default function AppointmentPage() {
  return (
    <div className="container mx-auto py-20">

      <h1 className="text-4xl font-bold mb-10">
        رزرو نوبت
      </h1>

      <div className="bg-white shadow rounded-3xl p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            placeholder="نام و نام خانوادگی"
            className="border p-4 rounded-xl"
          />

          <input
            placeholder="شماره موبایل"
            className="border p-4 rounded-xl"
          />

          <input
            type="date"
            className="border p-4 rounded-xl"
          />

          <select className="border p-4 rounded-xl">
            <option>ساعت مراجعه</option>
          </select>

        </div>

        <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl">
          ثبت نوبت
        </button>

      </div>

    </div>
  );
}