const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// dotenv configuration
dotenv.config();

// create app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// backend API routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

const path = require("path");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


// port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});



