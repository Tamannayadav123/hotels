const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./db");

const personRoutes = require("./router/personRoutes");

app.use("/person", personRoutes);

app.listen(3000,()=>
{
    console.log("listening on port 3000");
})