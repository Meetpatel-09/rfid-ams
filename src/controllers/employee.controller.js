const EmployeeModel = require("../models/employee.model");

exports.createEmployee = async (req, res) => {
    try {
        const { name, email, mobile, cardId } = req.body;

        const checkEmail = await EmployeeModel.findOne({ email });

        if (checkEmail) {
            return res.status(400).json({
                msg: "Email already registered",
            });
        }

        const checkMobile = await EmployeeModel.findOne({ mobile });

        if (checkMobile) {
            return res.status(400).json({
                msg: "Mobile already registered",
            });
        }

        const employee = await EmployeeModel({
            name,
            email,
            mobile,
            cardId,
            profile: req.file.filename,
        });

        await employee.save();

        res.status(201).json({
            msg: "Employee Created Successfully",
            data: employee,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};

exports.getEmployees = async (req, res) => {
    try {
        const employees = await EmployeeModel.find();

        res.status(200).json({
            msg: "Employees Found Successfully",
            data: employees,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await EmployeeModel.findById(req.params.id);

        res.status(200).json({
            msg: "Employee Found Successfully",
            data: employee,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const { name, email, mobile, cardId } = req.body;
        const employee = await EmployeeModel.findById(req.params.id, {
            name,
            email,
            mobile,
            cardId,
            profile: req.file.filename,
        });

        res.status(200).json({
            msg: "Employee Updated Successfully",
            data: employee,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        await EmployeeModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "Employee Deleted Successfully",
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};
