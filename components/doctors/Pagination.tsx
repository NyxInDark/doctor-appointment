export default function Pagination() {
  return (
    <div className="flex justify-center gap-3 mt-10">

      {[1,2,3,4,5].map((item)=>(
        <button
          key={item}
          className="w-10 h-10 border rounded-lg"
        >
          {item}
        </button>
      ))}

    </div>
  );
}