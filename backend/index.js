const express = require("express");
const app = express();
const postRoutes = require("./src/routes/postRoutes");

app.use(express.json());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(5000, () => console.log("Server running"));