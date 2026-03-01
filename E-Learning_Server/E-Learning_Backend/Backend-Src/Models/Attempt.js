const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    skill: { type: String, required: true },     // aptitude / dsa
    mode: { type: String, required: true },      // practice / workout
    difficulty: { type: String, required: true },// basic/moderate/advanced/pro

    questionId: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },

    code: { type: String }, // for DSA answers
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attempt", attemptSchema);
