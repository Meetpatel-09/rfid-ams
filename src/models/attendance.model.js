const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema(
    {
        cardId: {
            type: String,
            required: true,
        },
        employeeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: true,
        },
        inTime: {
            type: Date,
        },
        outTime: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const AttendanceModel = mongoose.model("Attendance", attendanceSchema);

module.exports = AttendanceModel;
