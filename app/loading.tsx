import DoctorCardSkeleton from "@/components/ui/DoctorCardSkeleton";

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <DoctorCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}