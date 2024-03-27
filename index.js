const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const transactionRoute = require("./routes/transactionRoutes");
const accountRoute = require("./routes/accountRoutes");
const categoryRoute = require("./routes/categoryRouter");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/transactions", transactionRoute);
app.use("/api/v1/accounts", accountRoute);
app.use("/api/v1/categories", categoryRoute);

module.exports = app;
