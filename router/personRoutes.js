const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/",async(req,res)=>
{
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json("Interval Server Error");
    }
})

router.get("/",async(req,res)=>
{
    try{
        console.log("fetching data");
        const data = await Person.find();
        console.log("data is fetched");
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json("Interval Server Error");
    }
})

router.put("/:id",async(req,res)=>
{
    try{
        console.log("updating data");
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true, //returns the updated document
            runValidators:true, //run mongoose validation(like we used required while defining schema)
        });

        if(!response)
        {
            return res.status(404).json({error:"Person not found"})
        }
        console.log("data updated");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json("Interval Server Error");
    }
}) 

router.delete("/:id",async(req,res)=>
{
    try
    {
        const personId = req.params.id;
        const response = await Person.findByIdAndRemove(personId);
        if(!response)
        {
            return res.status(404).json({error:"Person not found"});
        }
        console.log("data delete");
        res.status(200).json({message:"person deleted successfully"})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json("Interval Server Error");
    }
})

module.exports = router;

// comment added for test purpose..