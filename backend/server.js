require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const opportunityRoutes = require("./routes/opportunityRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const studentRoutes = require("./routes/studentRoutes");
const matchingRoutes = require("./routes/matchingRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);

app.use("/api/opportunity",opportunityRoutes);

app.use("/api/application",applicationRoutes);

app.use("/api/student",studentRoutes);

app.use("/api/matching",matchingRoutes);

app.get("/", (req,res)=>{
    res.send("Volunteer Platform API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
});