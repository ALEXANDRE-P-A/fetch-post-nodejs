require("dotenv").config();

const express = require("express");
const PORT = process.env.PORT || 3000;
const path = require("path");
const favicon = require("serve-favicon");

// express settings
const app = express();
app.set("view engine", "ejs");
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static resources
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));  

// dynamic resources
app.use("/", require("./routes/index.js"));

app.listen(PORT,_=>{
  console.log(`Application listening at http://127.0.0.1:${PORT}`);
});