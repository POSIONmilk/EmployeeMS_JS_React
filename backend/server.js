require("dotenv").config();
const express = require("express");
const cors = require("cors");
const taskRoute = require("./routes/taskRoute");
const userRoute = require("./routes/userRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies


app.use("/api/task", taskRoute); //Route for task
app.use("/api/user", userRoute);


// Sample API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});