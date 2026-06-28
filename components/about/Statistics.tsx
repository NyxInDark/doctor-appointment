export default function Statistics() {

  const stats = [
    "۵ پزشک",
    "۳ کلینیک",
    "۵۰۰ رزرو",
    "۲ متخصص",
    "۱۰۰ کاربر",
  ];

  return (
    <section className="container mx-auto py-16">

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

        {stats.map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl p-6 text-center"
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}