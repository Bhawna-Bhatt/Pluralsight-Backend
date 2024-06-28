const express = require("express");
const cors = require("cors");
const app = express();

// Enable all CORS requests
app.use(cors());

app.get("/", (req, res) => {
  res.send("CORS enabled for all origins!");
});

// single route cors
app.get("/data", cors(), (req, res) => {
  res.json({ message: "This route has CORS enabled for all origins!" });
});

const corsOptions = {
  origin: "http://example.com",
  optionSuccessStatus: 200,
};

app.post("/update", cors(corsOptions), (req, res) => {
  res.json({ message: "CORS enabled for only example.com" });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
