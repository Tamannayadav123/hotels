const mongoose = require("mongoose");

// mongodb connection URL  -->local 
// const mongoURL = "mongodb://localhost:27017/hotel";

// mongodb connection URL --> global
const mongoURL = "mongodb+srv://tyadav681026:tyadav681026@clusterone.lpj5w.mongodb.net/hotel";

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