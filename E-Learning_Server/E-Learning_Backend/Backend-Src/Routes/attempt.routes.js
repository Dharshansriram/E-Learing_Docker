const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const { saveAttempt } = require("../controllers/attempt.controller");

router.post("/", auth, saveAttempt);

module.exports = router;
