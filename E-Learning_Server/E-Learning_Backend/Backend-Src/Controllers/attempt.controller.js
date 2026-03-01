const Attempt = require("../models/Attempt.js");
const User = require("../models/User.js");

function calculateCredits(mode, difficulty, isCorrect) {
  if (mode !== "workout") return 0;
  if (!isCorrect) return 0;

  if (difficulty === "advanced") return 10;
  if (difficulty === "pro") return 20;

  return 0;
}

function checkBadges(credits, badges) {
  const updated = [...badges];

  if (!updated.includes("Starter")) updated.push("Starter");
  if (credits >= 100 && !updated.includes("Bronze")) updated.push("Bronze");
  if (credits >= 250 && !updated.includes("Silver")) updated.push("Silver");
  if (credits >= 500 && !updated.includes("Gold")) updated.push("Gold");

  return updated;
}

exports.saveAttempt = async (req, res) => {
  try {
    const userId = req.user.id;
    const { skill, mode, difficulty, questionId, isCorrect, code } = req.body;

    if (!skill || !mode || !difficulty || !questionId) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const attempt = await Attempt.create({
      userId,
      skill,
      mode,
      difficulty,
      questionId,
      isCorrect,
      code,
    });

    // ✅ update user credits
    const user = await User.findById(userId);
    const earned = calculateCredits(mode, difficulty, isCorrect);

    user.credits += earned;
    user.badges = checkBadges(user.credits, user.badges);

    await user.save();

    return res.json({
      message: "Attempt saved ✅",
      earned,
      credits: user.credits,
      badges: user.badges,
      attempt,
    });
  } catch (err) {
    return res.status(500).json({ message: "Failed to save attempt", error: err.message });
  }
};
