"use client";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface Props {
  value: DateObject | null;
  onChange: (date: DateObject | null) => void;
}

export default function PersianCalendar({ value, onChange }: Props) {
  return (
    <div className="flex justify-center w-full my-2 list-datepicker-custom">
      <Calendar
        value={value || undefined}
        onChange={(date) => {
          if (date instanceof DateObject) {
            onChange(date);
          } else if (date === null) {
            onChange(null);
          }
        }}
        calendar={persian}
        locale={persian_fa}
        className="bg-transparent shadow-none border-none"
      />
    </div>
  );
}