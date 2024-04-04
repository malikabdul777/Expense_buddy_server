const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const transactionRoute = require("./routes/transactionRoutes");
const accountRoute = require("./routes/accountRoutes");
const categoryRoute = require("./routes/categoryRouter");
const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/transactions", transactionRoute);
app.use("/api/v1/accounts", accountRoute);
app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);

module.exports = app;
