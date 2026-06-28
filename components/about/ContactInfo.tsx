export default function ContactInfo() {
  return (
    <section className="container mx-auto py-16">

      <h2 className="text-3xl font-bold mb-8">
        اطلاعات تماس
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-2xl">
          <h3>مشاوره</h3>
          <p>021-12345678</p>
        </div>

        <div className="bg-white p-6 rounded-2xl">
          <h3>پشتیبانی</h3>
          <p>021-98765432</p>
        </div>

      </div>

    </section>
  );
}