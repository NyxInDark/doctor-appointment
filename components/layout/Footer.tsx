import {
  FaInstagram,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="container mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-5">
              کد رزرو
            </h3>

            <p className="text-slate-300 leading-8">
              سامانه رزرو آنلاین نوبت پزشکان و مراکز درمانی.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-5">
              لینک‌های سریع
            </h4>

            <ul className="space-y-3 text-slate-300">
              <li>خانه</li>
              <li>پزشکان</li>
              <li>تخصص‌ها</li>
              <li>تماس با ما</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5">
              تماس با ما
            </h4>

            <ul className="space-y-3 text-slate-300">
              <li>تهران، ایران</li>
              <li>021-12345678</li>
              <li>info@example.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-5">
              شبکه‌های اجتماعی
            </h4>

            <div className="flex gap-4 text-2xl">

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaTelegram />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">
          © 2025 CodeRezerv. تمامی حقوق محفوظ است.
        </div>

      </div>

    </footer>
  );
}