"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "خانه",
    "پزشکان",
    "تخصص‌ها",
    "درباره ما",
    "تماس با ما",
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">

      <div className="container mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          کد رزرو
        </h1>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link href="#" key={link}>
              {link}
            </Link>
          ))}
        </nav>

        <button className="hidden md:flex bg-blue-600 text-white px-5 py-3 rounded-xl items-center gap-2">
          <FaUserCircle />
          ورود
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-6 gap-5">

            {links.map((link) => (
              <Link href="#" key={link}>
                {link}
              </Link>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}