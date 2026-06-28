import DoctorCard from "./DoctorCard";

const doctors = [
  {
    name: "دکتر وارسته",
    specialty: "متخصص قلب و عروق",
    image: "/images/doctors/doc1.jpg",
  },
  {
    name: "دکتر علی راد",
    specialty: "متخصص پوست",
    image: "/images/doctors/doc2.jpg",
  },
  {
    name: "دکتر حسینی",
    specialty: "جراح بینی",
    image: "/images/doctors/doc3.jpg",
  },
  {
    name: "دکتر سعادتی",
    specialty: "متخصص گوش و حلق",
    image: "/images/doctors/doc1.jpg",
  },
];

export default function DoctorList() {
  return (
    <>
    <div className="bg-white rounded-2xl border p-5 mb-6 flex justify-between">

  <div className="flex gap-6 text-gray-500">

    <button className="font-bold text-black">
      بیشترین بازدید
    </button>

    <button>
      بیشترین امتیاز
    </button>

    <button>
      جدیدترین
    </button>

  </div>

</div>
      {doctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          {...doctor}
        />
      ))}
    </>
  );
}