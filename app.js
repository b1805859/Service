var createError = require("http-errors");
const express = require("express");
const app = express();
require("dotenv").config();
const { connectDB } = require("./api/config/connectDB");
const path = require("path");
const { engine } = require("express-handlebars");
//Ket noi database
connectDB();

//Xử lý json
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/", express.static(path.join(__dirname, "/api/public")));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./api/views");

//static file

//API
app.use(require("./api/routes/header"));
app.use("/", (req, res, next) => {
  res.render("header/home", { index: 1 });
});

//Thông báo lỗi
app.use((req, res, next) => {
  next(createError(404, "Not Found!"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

module.exports = app;
