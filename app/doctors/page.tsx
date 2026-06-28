import DoctorFilter from "@/components/doctors/DoctorFilter";
import DoctorList from "@/components/doctors/DoctorList";
import Pagination from "@/components/doctors/Pagination";
import DoctorsFooter from "@/components/doctors/DoctorsFooter";

export default function DoctorsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-4 gap-8">

          {/* لیست پزشکان */}
          <div className="lg:col-span-3 space-y-5">
            <DoctorList />
            <Pagination />
          </div>

          {/* فیلترها */}
          <DoctorFilter />

        </div>

        <DoctorsFooter />
      </div>
    </main>
  );
}