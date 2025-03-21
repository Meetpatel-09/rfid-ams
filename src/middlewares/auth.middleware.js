const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = req.header("Authorization");

        if (!token) {
            return res.status(401).json({
                msg: "Access Denied",
            });
        }

        const isVerified = await jwt.verify(
            token.split(" ")[1],
            process.env.JWT_SECRET
        );

        if (!isVerified) {
            return res.status(401).json({
                msg: "Invalid Token",
            });
        }

        req.user = isVerified;
        next();
    } catch (error) {
        res.status(400).json({
            msg: error.message,
        });
    }
};
