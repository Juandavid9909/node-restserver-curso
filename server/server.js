require("./config/config");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, "../public")));

app.use(require("./routes/index"));

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;

    console.log("Base de datos online");
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto:", 3000);
});