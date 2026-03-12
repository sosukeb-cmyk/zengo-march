import express from "express";
import cors from "cors";
import { initDb, Booking } from "./models/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Booking API is running" });
});

app.post("/api/login", (req, res) => {
  // Authentication is disabled for now; accept any credentials.
  const { username } = req.body;
  return res.json({ token: "no-auth-token", username: username || "Guest" });
});

app.post("/api/bookings", async (req, res) => {
  try {
    const payload = req.body;

    // Ensure a booking reference is present
    if (!payload.bookingReference) {
      return res.status(400).json({ message: "Missing bookingReference" });
    }

    // Use provided username or default to guest
    payload.username = payload.username || "Guest";

    const booking = await Booking.create(payload);
    return res.status(201).json(booking);
  } catch (error) {
    console.error("/api/bookings error", error);
    return res.status(500).json({ message: "Failed to create booking", error: error.message });
  }
});

app.get("/api/bookings", async (req, res) => {
  const bookings = await Booking.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.json(bookings);
});

const port = parseInt(process.env.PORT ?? "4000", 10);

initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Booking API is listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize database", err);
    process.exit(1);
  });
