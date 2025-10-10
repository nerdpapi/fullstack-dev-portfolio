import express from "express";
import Visitor from "../models/Visitor.js";
import axios from "axios";

const router = express.Router();

// POST visitor
router.post("/", async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "Unknown";

    const visitor = new Visitor({
      ip,
      browser: req.body.browser || "Unknown",
      os: req.body.os || "Unknown",
    });

    await visitor.save();
    res.status(201).json({ message: "Visitor tracked", visitor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// GET all visitors
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ _id: -1 });
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
