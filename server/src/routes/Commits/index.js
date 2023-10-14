const express = require("express");
const { getCommits } = require("../../controllers/Commits");
const router = express.Router();

router.get("/commits", getCommits);

module.exports = router;
