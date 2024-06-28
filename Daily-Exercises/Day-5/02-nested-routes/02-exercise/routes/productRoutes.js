const express = require("express");
const router = express.Router({ mergeParams: true }); //Preserve the req.params
// values from the parent router.
const reviewsRouter = require("./reviewsRouter");

//retrieve all products
// router.get("/", (req, res) => {
//   console.log(req.query);
//   res.send("List of all products");
// });

//sorting by name or price + retrive without query

router.get("/", (req, res) => {
  const sortBy = req.query.sortBy;
  console.log(req.query);

  if (req.query != {}) {
    //sorting by name and price
    if (sortBy === "name") {
      res.send("Sorted by Product name");
    } else if (sortBy === "price") {
      res.send("Sorted by Product price");
    } else {
      // filtering by price range

      const { max, min } = req.query;
      res.send(`The maximum price is ${max} and minimum price is ${min}`);
    }
  } else {
    res.send("List of all products");
  }
});

router.get("/:productId", (req, res) => {
  console.log(req.method);
  res.send(`Detail of product with product id ${req.params.productId}`);
});

//add a product
router.post("/:productId/add", (req, res) => {
  console.log(req.method);
  res.send(`Add a  product with product id ${req.params.productId}`);
});

//update a product
router.put("/:productId/update", (req, res) => {
  console.log(req.method);
  res.send(`Update product with product id ${req.params.productId}`);
});

//delete a product

router.delete("/:productId/delete", (req, res) => {
  console.log(req.method);
  res.send(`Delete product with product id ${req.params.productId}`);
});

router.use("/:productId/reviews", reviewsRouter);

module.exports = router;
