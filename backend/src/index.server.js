// IMPORT SECTION
const env = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package

// INITIALIZATION SECTION
const app = express();
env.config();

// ROUTES SECTION
const userRoutes = require("./routes/userRoute");

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_HOST)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

// MIDDLEWARE SECTION
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure CORS to allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with the actual URL of your frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use((request, response, next) => {
  console.log(request.path, request.method); // Output the path and method of each request
  next(); // Move to the next middleware
});

app.use("/api", userRoutes);

// LISTEN SECTION
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
