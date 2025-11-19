const express = require("express");
const app = express();
require("dotenv").config();

const ItemsRouter = require("./routes/ItemsRouter");
const userRoutes = require("./routes/UserRouter");

const dbConnection =require("./config/dbConnection");
const authenticationRoutes = require("./routes/authenticationRoutes");
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use(ItemsRouter);
app.use(userRoutes);
app.use("/api/auth/",authenticationRoutes);
dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server running on http://localhost:${process.env.port}`);
})