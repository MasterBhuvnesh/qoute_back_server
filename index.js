const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const app = express();
app.use(
  cors({
    origin: ["https://masterbhuvnesh.github.io/Thoughtful-Threads"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

// URL
mongoose.connect(
  "mongodb+srv://bhuvneshverma:Verma29042005@collage.lkkh7mp.mongodb.net/Quotes"
);

// GET ALL USER DATA
app.get("/", (req, res) => {
  UserModel.find({})
    .sort({ name: 1 })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// RUN THE SERVER
app.listen(3001, () => {
  console.log("server is Running");
});
