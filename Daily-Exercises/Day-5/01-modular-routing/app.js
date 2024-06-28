const express = require("express");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
