const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/DB");
dotenv.config();

// Connect to MongoDB
connectDB();

// setting route
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/blog", (req, res) => res.send("Hello blog"));

const PORT = process.env.PORT || 3000;

// setting port
app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
