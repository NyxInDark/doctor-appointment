import DoctorCard from "./DoctorCard";
import { doctors } from "@/data/doctors";

export default function DoctorList() {
  return (
    <>
      <div className="bg-white rounded-2xl border p-5 mb-6 flex justify-between">
        <div className="flex gap-6 text-gray-500">
          <button className="font-bold text-black">
            بیشترین بازدید
          </button>

          <button>بیشترین امتیاز</button>

          <button>جدیدترین</button>
        </div>
      </div>

      <div className="grid gap-4">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            id={doctor.id}
            name={doctor.name}
            specialty={doctor.specialty}
            image={doctor.image}
          />
        ))}
      </div>
    </>
  );
}