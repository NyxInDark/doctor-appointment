export default function Dashboard() {
  return (
    <div className="container mx-auto py-20">

      <h1 className="text-4xl font-bold mb-10">
        داشبورد
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-blue-600 text-white p-8 rounded-3xl">
          نوبت‌ها
        </div>

        <div className="bg-green-600 text-white p-8 rounded-3xl">
          پزشکان
        </div>

        <div className="bg-purple-600 text-white p-8 rounded-3xl">
          کاربران
        </div>

      </div>

    </div>
  );
}