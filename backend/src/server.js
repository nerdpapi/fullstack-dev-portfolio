import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import visitorRoutes from "./routes/visitorRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err.message));

// Routes
app.use("/api/visitors", visitorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
