"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import DoctorCard from "./DoctorCard";
import DoctorFilter, { FilterState } from "./DoctorFilter";
import { doctors } from "@/data/doctors";

const ITEMS_PER_PAGE = 5;
type SortOption = "views" | "rating" | "newest";

type Doctor = (typeof doctors)[number];

export default function DoctorList() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    specialties: [],
    cities: [],
    genders: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>("views");

  // میانگین امتیاز هر دکتر رو از روی reviews حساب می‌کنیم
  const getAverageRating = (doctor: Doctor) => {
    if (!doctor.reviews || doctor.reviews.length === 0) return 0;
    const sum = doctor.reviews.reduce((acc, r) => acc + r.rating, 0);
    return sum / doctor.reviews.length;
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesSpecialty =
      filters.specialties.length === 0 ||
      filters.specialties.some((s) => doctor.specialty.includes(s));
    const matchesCity =
      filters.cities.length === 0 || filters.cities.includes(doctor.city);
    const matchesGender =
      filters.genders.length === 0 || filters.genders.includes(doctor.gender);
    return matchesSearch && matchesSpecialty && matchesCity && matchesGender;
  });

  // مرتب‌سازی بر اساس گزینه انتخاب‌شده (بیشترین بازدید / امتیاز / جدیدترین)
  const sortedDoctors = useMemo(() => {
    const list = [...filteredDoctors];
    switch (sortBy) {
      case "rating":
        return list.sort((a, b) => getAverageRating(b) - getAverageRating(a));
      case "newest":
        return list.sort((a, b) => b.id - a.id); // id بزرگ‌تر = جدیدتر
      case "views":
      default:
        return list.sort((a, b) => b.views - a.views);
    }
  }, [filteredDoctors, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedDoctors.length / ITEMS_PER_PAGE)
  );
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedDoctors = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return sortedDoctors.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedDoctors, safeCurrentPage]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1); // با هر تغییر فیلتر برگرد صفحه ۱
  };

  const handleSortChange = (option: SortOption) => {
    setSortBy(option);
    setCurrentPage(1); // با عوض شدن ترتیب هم برگرد صفحه ۱
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 space-y-5">
        <div className="bg-white rounded-2xl border p-5 mb-6 flex justify-between items-center">
          <div className="flex gap-6 text-gray-500">
            <button
              onClick={() => handleSortChange("views")}
              className={sortBy === "views" ? "font-bold text-black" : ""}
            >
              بیشترین بازدید
            </button>
            <button
              onClick={() => handleSortChange("rating")}
              className={sortBy === "rating" ? "font-bold text-black" : ""}
            >
              بیشترین امتیاز
            </button>
            <button
              onClick={() => handleSortChange("newest")}
              className={sortBy === "newest" ? "font-bold text-black" : ""}
            >
              جدیدترین
            </button>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <FaHome />
            بازگشت به صفحه اصلی
          </Link>
        </div>

        {sortedDoctors.length === 0 ? (
          <div className="bg-white rounded-2xl border p-10 text-center text-gray-400">
            پزشکی با این فیلترها یافت نشد.
          </div>
        ) : (
          <>
            <div className="grid gap-4">
              {paginatedDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  id={doctor.id}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  image={doctor.image}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg border font-medium transition-colors ${
                        page === safeCurrentPage
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            )}
          </>
        )}
      </div>
      <DoctorFilter onApply={handleFilterChange} />
    </div>
  );
}