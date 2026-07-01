import DoctorList from "@/components/doctors/DoctorList";

import DoctorsFooter from "@/components/doctors/DoctorsFooter";

export default function DoctorsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <DoctorList />
        
        <DoctorsFooter />
      </div>
    </main>
  );
}