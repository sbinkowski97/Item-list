const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const items = require("./routes/api/items");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const path = require("path");
const app = express();

//bodyparser middleware
app.use(express.json());

//dbconfig

const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

//use routes
app.use("/api/items", items);
app.use("/api/users", users);
app.use("/api/auth", auth);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started at port: ${port}`));
