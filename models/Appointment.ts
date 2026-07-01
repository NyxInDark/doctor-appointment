import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  doctorId: { type: Number, required: true },
  doctorName: { type: String, required: true },
  specialty: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);