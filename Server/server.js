require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require("../Server/Routes/projectRoutes");
const contactRoutes = require("../Server/Routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 8282;

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,  // ✅ Fixed Typo
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ Could not connect to MongoDB", err));


app.use("/api" , projectRoutes);
app.use("/api" , contactRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
