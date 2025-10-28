// server/config/connection.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

module.exports = mongoose.connection;
