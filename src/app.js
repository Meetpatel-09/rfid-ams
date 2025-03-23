const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use("/profile", express.static(path.join(__dirname, '../uploads/')));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const adminRouter = require("./routes/admin.routes");
const employeeRouter = require("./routes/employee.routes");
const cardRouter = require("./routes/card.routes");
const attendanceRouter = require("./routes/attendance.routes");

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/employee", employeeRouter);
app.use("/api/v1/card", cardRouter);
app.use("/api/v1/attendance", attendanceRouter);

module.exports = app;
