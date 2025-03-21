const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        mobile: {
            type: Number,
            unique: true,
            required: true,
        },
        cardId: {
            type: String,
            unique: true,
            required: true,
        },
        profile: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const EmployeeModel = mongoose.model("Employee", employeeSchema);

module.exports = EmployeeModel;
