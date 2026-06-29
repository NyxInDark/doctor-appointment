interface Props {
  value: string;
  onChange: (time: string) => void;
}

const times = [
  "09:15",
  "09:30",
  "09:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
];

export default function TimeSlots({
  value,
  onChange,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-3 mt-5">

      {times.map((time) => (

        <button
          key={time}
          onClick={() => onChange(time)}
          className={`border rounded-xl h-12
          ${
            value === time
              ? "bg-blue-600 text-white"
              : "bg-white"
          }`}
        >
          {time}
        </button>

      ))}

    </div>
  );
}