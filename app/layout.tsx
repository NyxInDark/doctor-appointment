import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { AppointmentProvider } from "@/context/AppointmentContext";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Doctor Appointment",
  description: "Online Doctor Reservation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <AuthProvider>
          <AppointmentProvider>
            {children}
          </AppointmentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}