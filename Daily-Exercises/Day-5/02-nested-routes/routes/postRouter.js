const express = require("express");
const router = express.Router({ mergeParams: true }); //Preserve the req.params
// values from the parent router.
const commentsRouter = require("./commentsRouter");

//get all the posts for a user
router.get("/", (req, res) => {
  res.send(`List of posts for User ${req.params.userId}`);
});

//get a specific post
router.get("/:postId", (req, res) => {
  res.send(
    `Details of Post ${req.params.postId} for User ${req.params.userId}`
  );
});

//nested comments router
router.use("/:postID/comments", commentsRouter);

module.exports = router;
