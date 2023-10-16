const express = require("express");
const { getCommits } = require("../../controllers/Commits");
const router = express.Router();

router.post("/commits", getCommits);

module.exports = router;
