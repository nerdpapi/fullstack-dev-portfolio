import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  browser: { type: String, default: "Unknown" },
  os: { type: String, default: "Unknown" },
  visitedAt: { 
    type: String, 
    required: true, 
    default: () => new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) 
  },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

export default Visitor;
