require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./config/connection");

// Import routes directly
const exerciseRoutes = require("./server/routes/exercise-routes");
const userRoutes = require("./server/routes/user-routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// API routes
app.use("/api/exercise", exerciseRoutes);
app.use("/api/user", userRoutes);

// Optional: serve React app for unmatched routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
