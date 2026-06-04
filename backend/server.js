/* eslint-disable */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5174",
    "https://recipe-app-frontend.vercel.app",
    "https://grand-projet-omega.vercel.app",
    "https://grand-projet-psi.vercel.app",
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "86400");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  next();
});

app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {})
  .catch((err) => {});

const recipesRoute = require("./routes/recipes");
app.use("/recipes", recipesRoute);

// Explicit OPTIONS handler for ai-recipe endpoint
app.options("/ai-recipe", (req, res) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5174",
    "https://recipe-app-frontend.vercel.app",
    "https://grand-projet-omega.vercel.app",
    "https://grand-projet-psi.vercel.app",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "86400");

  res.status(200).end();
});

// Add AI recipe generation endpoint
app.post("/ai-recipe", async (req, res) => {
  // Set CORS headers explicitly for this endpoint
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5174",
    "https://recipe-app-frontend.vercel.app",
    "https://grand-projet-omega.vercel.app",
    "https://grand-projet-psi.vercel.app",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  try {
    let { ingredients } = req.body;
    if (!ingredients || !Array.isArray(ingredients)) {
      return res.status(400).json({ error: "Ingredients must be an array" });
    }
    // Join array into a string for n8n
    const ingredientsString = ingredients.join(", ");
    // Send to n8n webhook
    const response = await axios.post(process.env.N8N_WEBHOOK_URL, {
      ingredients: ingredientsString,
    });
    // Return the recipe from n8n
    res.json({ recipe: response.data });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

// Health check route
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {});
