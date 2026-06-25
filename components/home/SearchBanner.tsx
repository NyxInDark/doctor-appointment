import { FaSearch } from "react-icons/fa";

export default function SearchBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">

        <div className="bg-blue-50 border border-blue-100 rounded-[32px] p-8 shadow-sm">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              جستجوی پزشک مورد نظر
            </h2>

            <p className="text-gray-500 mt-3">
              پزشک مناسب خود را پیدا کنید
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="نام پزشک"
              className="h-14 px-4 rounded-xl border border-gray-200 outline-none"
            />

            <select className="h-14 px-4 rounded-xl border border-gray-200">
              <option>انتخاب تخصص</option>
              <option>قلب و عروق</option>
              <option>مغز و اعصاب</option>
              <option>پوست و مو</option>
            </select>

            <select className="h-14 px-4 rounded-xl border border-gray-200">
              <option>انتخاب شهر</option>
              <option>تهران</option>
              <option>مشهد</option>
              <option>اصفهان</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-3 h-14 transition">
              <FaSearch />
              جستجو
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}