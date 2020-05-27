const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const items = require("./routes/api/items");

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//dbconfig

const db = require("./config/keys").mongoURI;

//connect to mongo

mongoose
  .connect(db)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

//use routes
app.use("/api/items", items);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at port: ${port}`));
