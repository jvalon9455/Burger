const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// middleware for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    connection.query("SELECT * FROM burgers", (err, data) => {
        console.table(data);
    })
    res.render("index");
})

// app.get("/api/config", (req, res) => {
//     res.json({
//         success: true,
//     })
// });

// get routes to access server
const routes = require ("./controllers/burgers_controllers")
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });