export default function DoctorCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden animate-pulse">
      <div className="h-56 bg-gray-200"></div>

      <div className="p-5">
        <div className="h-6 w-40 bg-gray-200 rounded mb-3"></div>

        <div className="h-4 w-28 bg-gray-200 rounded mb-4"></div>

        <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>

        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}