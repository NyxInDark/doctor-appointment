"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface Appointment {
  doctorId: number;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
}

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  isAlreadyBooked: (doctorId: number, date: string, time: string) => boolean;
}

const AppointmentContext = createContext<AppointmentContextType>({
  appointments: [],
  addAppointment: () => {},
  isAlreadyBooked: () => false,
});

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  const isAlreadyBooked = (doctorId: number, date: string, time: string) => {
    return appointments.some(
      (a) => a.doctorId === doctorId && a.date === date && a.time === time
    );
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, isAlreadyBooked }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export const useAppointments = () => useContext(AppointmentContext);