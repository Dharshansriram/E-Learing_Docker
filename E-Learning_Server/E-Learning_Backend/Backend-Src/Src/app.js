const express = require("express");
const cors = require("cors");



const authRoutes = require("./routes/auth.routes");
const questionRoutes = require("./routes/questions.routes");
const attemptRoutes = require("./routes/attempt.routes");
const userRoutes = require("./routes/users.routes");

const app = express();


app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "✅ CIET Learning Backend Running",
    });
});


app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/attempt", attemptRoutes);
app.use("/api/users", userRoutes);




app.use((err, req, res, next) => {
    console.error(" SERVER ERROR:", err);

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;