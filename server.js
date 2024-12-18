const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./db");

const personRoutes = require("./router/personRoutes");

app.use("/person", personRoutes);

app.listen(PORT,()=>
{
    console.log("listening on port 3000");
})