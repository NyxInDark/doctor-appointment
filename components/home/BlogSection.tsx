import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "نکات مهم برای سلامت قلب",
    desc: "راهکارهای ساده برای حفظ سلامت قلب و عروق.",
    image: "/images/articles/article1.jpg",
  },
  {
    title: "تغذیه مناسب برای کودکان",
    desc: "مواد غذایی ضروری برای رشد بهتر کودکان.",
    image: "/images/articles/article2.jpg",
  },
  {
    title: "چگونه استرس را کنترل کنیم؟",
    desc: "روش‌های موثر برای کاهش استرس روزانه.",
    image: "/images/articles/article3.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* عنوان */}
        <div className="flex justify-between items-center mb-10">

          <h2 className="text-4xl font-bold">
            مقالات پزشکی
          </h2>

          <Link
            href="/articles"
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            مشاهده همه
          </Link>

        </div>

        {/* کارت ها */}
        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition duration-300"
            >

              {/* عکس */}
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              {/* محتوا */}
              <div className="p-6">

                <h3 className="font-bold text-xl">
                  {blog.title}
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  {blog.desc}
                </p>

                <button className="mt-5 text-blue-600 font-medium hover:text-blue-800">
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