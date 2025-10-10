import express from "express";
import cors from "cors";
import contactRoutes from "./routes/visitorRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

export default app;
