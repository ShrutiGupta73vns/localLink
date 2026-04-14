const express = require("express");
const app = express();
const cors = require("cors");
const postRoutes = require("./src/routes/postRoutes");


app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());


app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(5000, () => console.log("Server running"));