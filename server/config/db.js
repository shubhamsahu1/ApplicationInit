const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Mongodb connection success");
    })
    .catch((err) => {
      console.log(err);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB; 