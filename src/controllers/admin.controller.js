const bcrypt = require("bcryptjs");
const AdminModel = require("../models/admin.model");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                msg: "Email and Password are required",
            });
        }

        const admin = await AdminModel.findOne({ email });

        if (!admin) {
            return res.status(400).json({
                msg: "Email not registered",
            });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({
                msg: "Invalid Password",
            });
        }

        const token = await jwt.sign(
            { userId: admin._id },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.EXPIRES_IN,
            }
        );

        res.status(200).json({
            msg: "Login Successful",
            token: token,
            data: admin,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};

exports.createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const checkAdmin = await AdminModel.findOne({ email });
        console.log(checkAdmin);
        if (checkAdmin) {
            return res.status(400).json({
                msg: "Email Already registered",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const admin = new AdminModel({
            name,
            email,
            password: hashedPassword,
        });

        await admin.save();

        res.status(201).json({
            msg: "Admin Created Successfully",
            data: admin,
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};
