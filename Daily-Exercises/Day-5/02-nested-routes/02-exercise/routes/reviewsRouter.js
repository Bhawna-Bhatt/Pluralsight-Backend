const express = require("express");
const router = express.Router({ mergeParams: true });

// Route to get all reviews for a post
router.get("/", (req, res) => {
  console.log(req.params);
  res.send(`List of all reviews for products ${req.params.productId}`);
});

// Route to get a specific review
router.get("/:reviewId", (req, res) => {
  res.send(
    `Details of Review ${req.params.reviewId} for Product ${req.params.productId}`
  );
});

//add a review
router.post("/:reviewId/add", (req, res) => {
  res.send(
    `Added Review ${req.params.reviewId} for Product ${req.params.productId}`
  );
});

//update a review
router.put("/:reviewId/update", (req, res) => {
  res.send(
    `Updated Review ${req.params.reviewId} for Product ${req.params.productId}`
  );
});

//delete a review
router.delete("/:reviewId/delete", (req, res) => {
  res.send(
    `Deleted Review ${req.params.reviewId} for Product ${req.params.productId}`
  );
});
module.exports = router;
