const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/loaders/db");
const app = express();

require("./src/loaders")(app);

const connectDB = async () => {
    await connectToDatabase();
};
connectDB();

app.listen(81, () => {
    console.log("Listening on port 81");
});