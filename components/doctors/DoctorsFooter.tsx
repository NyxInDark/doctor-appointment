export default function DoctorsFooter() {
  return (
    <footer className="mt-20 py-16 border-t">

      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="font-bold mb-4">
            مشترک شوید
          </h3>
          <input
            placeholder="ایمیل"
            className="border p-3 rounded-xl w-full"
          />
        </div>

        <div>
          <h3 className="font-bold mb-4">
            اطلاعات تماس
          </h3>
          <p>021123456</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            اطلاعات حقوقی
          </h3>
          <p>تمامی حقوق محفوظ است</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            لینک‌های سریع
          </h3>
          <p>صفحه اصلی</p>
          <p>پزشکان</p>
        </div>

      </div>

    </footer>
  );
}