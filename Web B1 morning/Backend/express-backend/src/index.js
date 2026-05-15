require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
// Configure CORS dynamically based on Vercel Environments
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());

// In-memory data store for CRUD operations
let items = [
  { id: 1, name: "Item 1", description: "This is the first item" },
  { id: 2, name: "Item 2", description: "This is the second item" },
];

// --- ROUTES ---

// 1. Root route - demonstrating env variable usage
app.get("/", (req, res) => {
  // Uses WELCOME_MESSAGE from .env or falls back to a default string
  const message =
    process.env.WELCOME_MESSAGE || "Hello World from Express on Vercel!";

  res.json({
    success: true,
    message: message,
    environment: process.env.VERCEL_ENV || "local development",
  });
});

// --- CRUD OPERATIONS ---

// CREATE
app.post("/api/items", (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });
  }

  const newItem = {
    id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
    name,
    description: description || "",
  };

  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
});

// READ ALL
app.get("/api/items", (req, res) => {
  res.json({ success: true, count: items.length, data: items });
});

// READ ONE
app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));

  if (!item) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }

  res.json({ success: true, data: item });
});

// UPDATE
app.put("/api/items/:id", (req, res) => {
  const { name, description } = req.body;
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));

  if (itemIndex === -1) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }

  const updatedItem = {
    ...items[itemIndex],
    name: name || items[itemIndex].name,
    description:
      description !== undefined ? description : items[itemIndex].description,
  };

  items[itemIndex] = updatedItem;
  res.json({ success: true, data: updatedItem });
});

// DELETE
app.delete("/api/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));

  if (itemIndex === -1) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }

  items = items.filter((i) => i.id !== parseInt(req.params.id));
  res.json({ success: true, message: "Item deleted successfully" });
});

// Server listener (mainly for local development)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the Express API (required by Vercel for Serverless Functions)
module.exports = app;
