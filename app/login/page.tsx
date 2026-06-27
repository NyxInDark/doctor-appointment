export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-50">

      <div className="bg-white shadow-xl rounded-3xl p-10 w-[400px]">

        <h1 className="text-3xl font-bold mb-8">
          ورود
        </h1>

        <input
          placeholder="ایمیل"
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full border p-4 rounded-xl"
        />

        <button className="w-full bg-blue-600 text-white py-4 rounded-xl mt-6">
          ورود
        </button>

      </div>

    </div>
  );
}