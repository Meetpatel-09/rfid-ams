const AttendanceModel = require("../models/attendance.model");
const EmployeeModel = require("../models/employee.model");

const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    new Date().getHours() - 9,
    -30,
    0,
    0
);

exports.putAttendance = async (req, res) => {
    try {
        const cardId = req.params.id;
        const employee = await EmployeeModel.findOne({ cardId });

        const checkAttendace = await AttendanceModel.findOne({
            inTime: { $gte: today },
            cardId,
        });

        if (!checkAttendace) {
            const attendance = new AttendanceModel({
                cardId,
                employeeId: employee._id,
                inTime: Date.now(),
            });

            await attendance.save();

            return res.status(200).json({
                msg: "Success",
                data: attendance,
            });
        }
        await AttendanceModel.findByIdAndUpdate(checkAttendace._id, {
            outTime: Date.now(),
        });

        const attendance = await AttendanceModel.findById(checkAttendace._id);

        return res.status(200).json({
            msg: "Success",
            data: attendance,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: error.message,
        });
    }
};

exports.getAttendance = async (req, res) => {
    try {
        const attendnace = await AttendanceModel.find({
            inTime: { $gte: today },
        });

        res.status(200).json({
            data: attendnace,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};
