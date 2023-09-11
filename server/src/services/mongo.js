const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:Je7F3KAM8INHDGNq@nasacluster.owwswum.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisConnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisConnect,
};
