require("dotenv").config();

const express = require("express");
const PORT = process.env.PORT || 3000;
const path = require("path");

// express settings
const app = express();
app.set("view engine", "ejs");
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static resources
app.use("/public", express.static(path.join(__dirname, "/public")));

// dynamic resources
app.use("/", require("./routes/index.js"));

app.listen(PORT,_=>{
  console.log(`Application listening at http://127.0.0.1:${PORT}`);
});