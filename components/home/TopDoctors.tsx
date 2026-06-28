import DoctorCard from "@/components/ui/DoctorCard";

const doctors = [
  {
    id: 1,
    name: "دکتر علی محمدی",
    specialty: "تخصص قلب",
    city: "تهران",
    rating: 4.9,
    experience: "8 سال سابقه",
    image: "/images/doctors/doc1.jpg",
  },
  {
    id: 2,
    name: "دکتر سارا حسینی",
    specialty: "متخصص مغز و اعصاب",
    city: "شیراز",
    rating: 4.8,
    experience: "15 سال سابقه",
    image: "/images/doctors/doc2.jpg",
  },
  {
    id: 3,
    name: "دکتر نرگس احمدی",
    specialty: "پزشک عمومی",
    city: "اصفهان",
    rating: 4.7,
    experience: "5 سال سابقه",
    image: "/images/doctors/doc3.jpg",
  },
];

export default function TopDoctors() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            محبوب‌ترین پزشکان
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}