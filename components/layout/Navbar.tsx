import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">

      <div className="container mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl text-white flex items-center justify-center font-bold">
            +
          </div>

          <h1 className="text-2xl font-bold text-blue-600">
            کد رزرو
          </h1>
        </div>

        <nav className="hidden md:flex gap-8">
          <Link href="#">خانه</Link>
          <Link href="#">پزشکان</Link>
          <Link href="#">تخصص‌ها</Link>
          <Link href="#">درباره ما</Link>
          <Link href="#">تماس با ما</Link>
        </nav>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition">
          <FaUserCircle />
          ورود
        </button>

      </div>

    </header>
  );
}