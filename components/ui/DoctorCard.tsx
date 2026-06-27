import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Doctor } from "@/types/doctor";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({
  doctor,
}: DoctorCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:-translate-y-2 duration-300">
      <div className="relative h-56">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold">{doctor.name}</h3>

        <p className="text-gray-500 mt-1">
          {doctor.specialty}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <FaStar className="text-yellow-500" />
          <span>{doctor.rating}</span>
        </div>

        <p className="text-sm text-gray-400 mt-2">
          {doctor.experience}
        </p>
      </div>

      <div className="flex items-center justify-between mt-5">
  <span className="text-sm text-gray-500">
    {doctor.city}
  </span>

  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
    رزرو
  </button>
</div>
    </div>
    
  );
}