const blogs = [
  {
    title: "نکات مهم برای سلامت قلب",
    desc: "راهکارهای ساده برای حفظ سلامت قلب و عروق.",
  },
  {
    title: "تغذیه مناسب برای کودکان",
    desc: "مواد غذایی ضروری برای رشد بهتر کودکان.",
  },
  {
    title: "چگونه استرس را کنترل کنیم؟",
    desc: "روش‌های موثر برای کاهش استرس روزانه.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            مقالات پزشکی
          </h2>

          <button className="text-blue-600">
            مشاهده همه
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <div className="h-56 bg-blue-100"></div>

              <div className="p-6">

                <h3 className="font-bold text-xl">
                  {blog.title}
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  {blog.desc}
                </p>

                <button className="mt-5 text-blue-600 font-medium">
                  مطالعه بیشتر
                </button>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}