import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  nationalCode: { type: String, default: "" },
  birthYear: { type: String, default: "" },
  gender: { type: String, default: "" },
  city: { type: String, default: "" },
  email: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);