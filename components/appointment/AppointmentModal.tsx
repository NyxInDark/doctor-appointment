"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { DateObject } from "react-multi-date-picker";
import PersianCalendar from "./PersianCalendar";
import TimeSlots from "./TimeSlots";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface MessageState {
  text: string;
  type: "success" | "error" | null;
}

export default function AppointmentModal({ open, onClose }: Props) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<DateObject | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState<MessageState>({ text: "", type: null });
  const [isLoggedIn] = useState<boolean>(false);
  const [hasAlreadyBooked, setHasAlreadyBooked] = useState<boolean>(false);

  if (!open) return null;

  const handleReservation = () => {
    if (!isLoggedIn) {
      setMessage({
        text: "ابتدا وارد حساب کاربری خود شوید",
        type: "error",
      });
      setTimeout(() => router.push("/login"), 1500);
      return;
    }

    if (!selectedDate || !selectedTime) {
      setMessage({
        text: "لطفاً ابتدا تاریخ و ساعت نوبت خود را انتخاب کنید.",
        type: "error",
      });
      return;
    }

    if (hasAlreadyBooked) {
      setMessage({
        text: "شما از قبل این نوبت را رزرو کرده‌اید",
        type: "error",
      });
      return;
    }

    setMessage({
      text: "نوبت شما با موفقیت رزرو شد",
      type: "success",
    });
    setHasAlreadyBooked(true);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl w-125 max-h-[90vh] overflow-y-auto p-6 shadow-xl relative">

        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose} className="text-xl text-gray-400 hover:text-gray-600">
            ✕
          </button>
          <h2 className="font-bold text-lg text-gray-800">تقویم</h2>
        </div>

        {message.type && (
          <div
            className={`w-full py-3 px-4 rounded-xl text-center text-sm font-bold mb-4 transition-all duration-300 ${
              message.type === "success"
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-red-100 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="border border-gray-100 rounded-2xl p-2 mb-4 bg-gray-50/50">
          <PersianCalendar value={selectedDate} onChange={setSelectedDate} />
        </div>

        <div className="mb-6">
          <TimeSlots value={selectedTime} onChange={setSelectedTime} />
        </div>

        <button
          onClick={handleReservation}
          className="w-full h-12 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
        >
          رزرو نوبت
        </button>
      </div>
    </div>
  );
}