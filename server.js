const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res)=> {
    res.render("index");
})

app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    })
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });