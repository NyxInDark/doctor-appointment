import { cn } from "../../lib/utils";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
}: Props) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-xl transition-all duration-300",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-gray-300 hover:bg-gray-100"
      )}
    >
      {children}
    </button>
  );
}