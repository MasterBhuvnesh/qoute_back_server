const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://bhuvneshverma:Verma29042005@collage.lkkh7mp.mongodb.net/Quotes");

// GET ALL USER DATA
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// RUN THE SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
