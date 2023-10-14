require("dotenv").config();

const getCommits = (req, res) => {
  const { body } = req;
  try {
    res.status(202).send(body);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getCommits };
