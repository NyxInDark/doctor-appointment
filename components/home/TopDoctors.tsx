import { FaStar } from "react-icons/fa";

const doctors = [
  {
    name: "دکتر محمد رضایی",
    specialty: "قلب و عروق",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    name: "دکتر نرگس احمدی",
    specialty: "پوست و مو",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  },
  {
    name: "دکتر امیر نادری",
    specialty: "مغز و اعصاب",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
  {
    name: "دکتر سارا موسوی",
    specialty: "کودکان",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f",
  },
];

export default function TopDoctors() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            پزشکان برتر
          </h2>

          <button className="text-blue-600">
            مشاهده همه
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              <div className="h-56 overflow-hidden">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-5 text-center">

                <h3 className="font-bold text-lg">
                  {doctor.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {doctor.specialty}
                </p>

                <div className="flex justify-center items-center gap-2 mt-4 text-yellow-500">
                  <FaStar />
                  <span>{doctor.rating}</span>
                </div>

                <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
                  رزرو نوبت
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}