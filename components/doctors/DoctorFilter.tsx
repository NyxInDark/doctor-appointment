"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export interface FilterState {
  search: string;
  specialties: string[];
  cities: string[];
  genders: string[];
}

interface Props {
  onApply: (filters: FilterState) => void;
}

export default function DoctorFilter({ onApply }: Props) {
  const specialtiesList = ["قلب و عروق", "پوست", "جراحی", "چشم", "گوش و حلق"];
  const citiesList = ["تهران", "اصفهان", "شیراز", "تبریز"];

  const [search, setSearch] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);

  const toggleItem = (value: string, list: string[], setList: (v: string[]) => void) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleApply = () => {
    onApply({
      search,
      specialties: selectedSpecialties,
      cities: selectedCities,
      genders: selectedGenders,
    });
  };

  const handleReset = () => {
    setSearch("");
    setSelectedSpecialties([]);
    setSelectedCities([]);
    setSelectedGenders([]);
    onApply({ search: "", specialties: [], cities: [], genders: [] });
  };

  return (
    <aside className="bg-white rounded-2xl border p-6 sticky top-24">
      <div className="flex justify-between mb-6">
        <h2 className="font-bold text-lg">فیلترها</h2>
        <button onClick={handleReset} className="text-blue-600 text-sm">
          حذف همه
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجوی پزشک"
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div className="border-t py-5">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">تخصص ها</h3>
          <FaChevronDown />
        </div>
        <div className="space-y-3">
          {specialtiesList.map((item) => (
            <label key={item} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedSpecialties.includes(item)}
                onChange={() => toggleItem(item, selectedSpecialties, setSelectedSpecialties)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t py-5">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">شهر</h3>
          <FaChevronDown />
        </div>
        <div className="space-y-3">
          {citiesList.map((city) => (
            <label key={city} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedCities.includes(city)}
                onChange={() => toggleItem(city, selectedCities, setSelectedCities)}
              />
              <span>{city}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t py-5">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">جنسیت پزشک</h3>
          <FaChevronDown />
        </div>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedGenders.includes("آقا")}
              onChange={() => toggleItem("آقا", selectedGenders, setSelectedGenders)}
            />
            <span>آقا</span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedGenders.includes("خانم")}
              onChange={() => toggleItem("خانم", selectedGenders, setSelectedGenders)}
            />
            <span>خانم</span>
          </label>
        </div>
      </div>

      <button
        onClick={handleApply}
        className="w-full bg-blue-600 text-white py-3 rounded-xl mt-6"
      >
        اعمال فیلترها
      </button>
    </aside>
  );
}