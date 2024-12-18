const mongoose = require("mongoose");
require("dotenv").config();

// mongodb connection URL  -->local 
// const mongoURL = DB_URL_LOCAL;

// mongodb connection URL --> global
const mongoURL = process.env.DB_URL;

// setting up mongodb connection 
mongoose.connect(mongoURL,{
    useNewURLParser:true,
    useUnifiedTopology:true
})

// get the default connection 
// mongoose maintains a default connection object representing
// mongodb connection
const db = mongoose.connection;

// define event listners for database connection

db.on("connected",()=>
{
    console.log("connected to mongodb server");
});

db.on("disconnected",()=>
{
    console.log("mongoDB disconnected");
});

db.on("error",(err)=>
{
    console.log("MongoDB connection error",err);
});

// export the database connection
module.exports = db;