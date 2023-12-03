const mongoose = require("mongoose");
// Set up default mongoose connection

const connectDB = async () => {
  return await mongoose
    .connect(process.env.MONGODB, {})
    .then(() => {
      console.log("MongoDB connected successfully");
      
    })
    .catch((error) => {
      console.error(`MongoDB connection error: ${error}`);
      // Handle the error appropriately (e.g., exit the application)
      process.exit(1);
    });
};

module.exports = connectDB;
