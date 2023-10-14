const axios = require("axios");
require("dotenv").config();

const getCommits = async (req, res) => {
  try {
    const { user, repo } = req.body;

    if (!user || !repo) {
      res.status(400).json({ error: "Missing information" });
      return;
    } else {
      const api = `https://api.github.com/repos/${user}/${repo}/commits`;
      const response = await axios.get(api);
      res.status(200).json(response.data);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = getCommits;
