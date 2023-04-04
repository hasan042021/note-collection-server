const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());

dotenv.config();

connectDB();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  console.log("here");
  res.send("Running...");
});

app.listen(PORT, () => {
  console.log("listening to port", PORT);
});

app.use(notFound);
app.use(errorHandler);
