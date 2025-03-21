const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        // unique: true,
        required: true,
    },
    role: {
        type: String,
        default: "admin",
    },
    password: {
        type: String,
        required: true,
    },
});

const AdminModel = mongoose.model("Admin", adminSchema);

module.exports = AdminModel;
