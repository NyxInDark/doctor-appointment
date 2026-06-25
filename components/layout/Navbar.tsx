import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const links = [
    "خانه",
    "پزشکان",
    "تخصص‌ها",
    "درباره ما",
    "تماس با ما",
  ];

  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
            +
          </div>

          <h1 className="text-2xl font-bold text-blue-600">
            کد رزرو
          </h1>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Login */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition">
          <FaUserCircle />
          ورود
        </button>
      </div>
    </header>
  );
}