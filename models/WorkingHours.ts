import mongoose from "mongoose";

const WorkingHoursSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  dayOfWeek: { type: String, required: true }, // شنبه، یکشنبه، ...
  startTime: { type: String, required: true }, // 09:00
  endTime: { type: String, required: true },   // 17:00
  slotDuration: { type: Number, default: 30 }, // دقیقه
  isActive: { type: Boolean, default: true },
});

export default mongoose.models.WorkingHours || mongoose.model("WorkingHours", WorkingHoursSchema);