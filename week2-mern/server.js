const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const noteRoutes = require("./routes/noteRoutes");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/notes", noteRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Notes App Backend is running",
  });
});

const PORT = process.env.PORT || 5001;

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
console.log("MongoDB connected successfully");
})
.catch((error) => {
console.error("MongoDB connection failed:", error.message);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});