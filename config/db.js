const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("db connection sccessfull!");
      })
      .catch((error) => {
        console.log(`db connection failed, ${error}`);
      });
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnection;
