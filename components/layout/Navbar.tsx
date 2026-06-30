"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const links = [
    { title: "خانه", href: "/" },
    { title: "پزشکان", href: "/doctors" },
    { title: "تخصص‌ها", href: "/specialties" },
    { title: "درباره ما", href: "/about" },
   { title: "تماس با ما", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-blue-600">کد رزرو</h1>

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

        {isLoggedIn ? (
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-xl border border-blue-600 text-blue-600 px-5 py-3 transition hover:bg-blue-50"
            >
              <FaUserCircle />
              <span>پروفایل</span>
            </Link>
            <button
              onClick={logout}
              className="rounded-xl bg-red-500 px-5 py-3 text-white transition hover:bg-red-600"
            >
              خروج
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            <FaUserCircle />
            <span>ورود</span>
          </Link>
        )}

        <button onClick={() => setOpen(!open)} className="text-2xl md:hidden">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

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
            {isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-blue-600 text-blue-600 px-5 py-3 transition hover:bg-blue-50"
                >
                  <FaUserCircle />
                  <span>پروفایل</span>
                </Link>
                <button
                  onClick={() => { logout(); setOpen(false); }}
                  className="rounded-xl bg-red-500 px-5 py-3 text-white transition hover:bg-red-600"
                >
                  خروج
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
              >
                <FaUserCircle />
                <span>ورود</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}