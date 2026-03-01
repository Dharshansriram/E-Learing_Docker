const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    chapter: Number,
    problemCode: String,
    language: String,
    code: String,
    input: String,
    output: String,
    status: String,
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Submission", submissionSchema);