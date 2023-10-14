require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());

app.use("/server", require("./routes/Commits"))

async function main() {
  try {
    app.listen(process.env.PORT, () => {
      console.log("Listening on http://localhost:" + process.env.PORT);
    });
  } catch (error) {
    console.error("Error starting application:", error);
  }
}

main();