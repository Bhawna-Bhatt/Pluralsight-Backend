const express = require("express");
//import { Chalk } from "chalk";
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 3000;
const sessionRouter = express.Router();

const app = express();
app.use(morgan("tiny")); //options are combined
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "src/views");
app.set("view engine", "ejs");

sessionRouter.route("/").get((req, res) => {
  res.render("sessions", {
    sessions: [
      { title: "Session1", description: "this is session1" },
      { title: "Session2", description: "this is session2" },
      { title: "Session3", description: "this is session3" },
      { title: "Session4", description: "this is session4" },
    ],
  });
});

sessionRouter.route("/1").get((req, res) => {
  res.send("hello single sessions");
});

app.use("/sessions", sessionRouter);
app.get("/sessions/sessionID");
app.get("/", (req, res) => {
  res.render("index", {
    title: "welcome to Globomantics!",
    data: ["a", "b", "c"],
  });
});
// app.get("/", (req, res) => {
//   res.send("hello from my app!");
// });

app.listen(PORT, () => {
  //console.log(`listening on the port ${chalk.green("3000")}`);
  debug(`listening to the port ${chalk.green(PORT)}`);
});
