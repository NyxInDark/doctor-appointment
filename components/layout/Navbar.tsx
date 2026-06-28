"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "خانه",
      href: "/",
    },
    {
      title: "پزشکان",
      href: "/doctors",
    },
    {
      title: "تخصص‌ها",
      href: "/specialties",
    },
    {
      title: "درباره ما",
      href: "/about",
    },
    {
      title: "تماس با ما",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          کد رزرو
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-blue-600"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <button className="hidden md:flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700">
          <FaUserCircle />
          <span>ورود</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col gap-5 p-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            <button className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700">
              <FaUserCircle />
              <span>ورود</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
