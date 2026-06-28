export default function AboutHero() {
  return (
    <section className="container mx-auto py-20 px-6">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-4xl font-bold mb-6">
            درباره کد رزرو
          </h1>

          <p className="text-gray-600 leading-8">
            سامانه رزرو آنلاین پزشکان برای ارتباط
            آسان‌تر بیماران و پزشکان طراحی شده است.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/about/about-hero.png"
            alt=""
            className="max-w-full"
          />
        </div>

      </div>

    </section>
  );
}