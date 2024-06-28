const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET request for listing all users");
});

router.post("/", (req, res) => {
  res.send("POST request for add a new user");
});

router.put("/:id", (req, res) => {
  res.send(`PUT request to update user ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`DELETE request to remove ${req.params.id}`);
});

module.exports = router;
