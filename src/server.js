const dotEnv = require("dotenv");
const app = require("./app");
const connectDB = require("./db");

dotEnv.config();

connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
