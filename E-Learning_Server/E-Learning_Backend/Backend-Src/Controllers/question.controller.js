const aptitude = require("../data/aptitude.js");
const dsa = require("../data/dsa.js");

const getQuestions = async(req, res) => {
    try {
        const { skill, mode } = req.query;

        if (!skill) {
            return res.status(400).json({ message: "skill is required" });
        }

        const allowed =
            mode === "practice" ? ["basic", "moderate"] : ["advanced", "pro"];

        if (skill === "aptitude") {
            const filtered = aptitude.filter((q) => allowed.includes(q.difficulty));
            return res.json(filtered);
        }

        if (skill === "dsa") {
            const filtered = dsa.filter((q) => allowed.includes(q.difficulty));
            return res.json(filtered);
        }

        return res.status(400).json({ message: "Invalid skill" });
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

module.exports = { getQuestions };