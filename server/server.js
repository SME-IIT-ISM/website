const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());

// Use routes
// app.use("/", require("./routes/home"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at ${port}`));
