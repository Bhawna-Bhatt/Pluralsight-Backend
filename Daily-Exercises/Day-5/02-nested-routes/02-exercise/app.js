const express = require("express");
const app = express();
const router = require("./routes/productRoutes");
const PORT = 3000;

app.use("/products", router);
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
