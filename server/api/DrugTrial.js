const express = require('express');
const router = express.Router();
const DrugTrial = require('../models/DrugTrial');

router.post('/', async(req,res) =>{
    try{
        const newEntry = new DrugTrial(req.body);
        await newEntry.save();
        res.json({success:true , message:"data successfully saved"});
    } catch(error){
        res.status(500).json({success:false, message:"Failed to save data"});
    }
});

module.exports = router;
