import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialty: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, default: "" },
  address: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);