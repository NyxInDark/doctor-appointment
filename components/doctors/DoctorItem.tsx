import Image from "next/image";

interface Props {
  name: string;
  specialty: string;
  image: string;
}

export default function DoctorItem({
  name,
  specialty,
  image,
}: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">

      <div className="flex gap-6">

        <Image
          src={image}
          alt={name}
          width={130}
          height={130}
          className="rounded-xl"
        />

        <div className="flex-1">

          <h3 className="text-xl font-bold">
            {name}
          </h3>

          <p className="text-gray-500 mt-2">
            {specialty}
          </p>

          <div className="mt-3 text-yellow-500">
            ★★★★★
          </div>

          <div className="mt-5 text-gray-600">
            آدرس مطب: تهران
          </div>

          <div className="mt-2 text-gray-600">
            اولین نوبت: دوشنبه
          </div>

          <div className="flex gap-4 mt-6">

            <button className="flex-1 border rounded-xl py-3">
              مشاهده پروفایل
            </button>

            <button className="flex-1 bg-blue-600 text-white rounded-xl py-3">
              رزرو نوبت
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}