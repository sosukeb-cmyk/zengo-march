import express from "express";

const app = express();

app.use(express.json());

app.post("/api/bookings", (req, res) => {
  console.log("Booking received:", req.body);

  res.json({
    id: Date.now(),
    message: "Booking saved"
  });
});

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});