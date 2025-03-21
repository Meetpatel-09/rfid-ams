const mongoose = require("mongoose");

const connectDB = async () =>
    await mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("DB connected Successfully");
        })
        .catch((err) => {
            console.log(`DB not connected due to: ${err}`);
        });

module.exports = connectDB;
