const express = require("express");
const app = express();
require("dotenv").config();

const itemRoutes = require("./routes/ItemsRouter");
const userRoutes = require("./routes/UserRouter");

const dbConnection =require("./config/dbConnection");
const authenticationRoutes = require("./routes/authenticationRoutes");


app.use(express.json());
app.use(itemRoutes);
app.use(userRoutes);
app.use("/api/auth/",authenticationRoutes);
dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server running on http://localhost:${process.env.port}`);
})