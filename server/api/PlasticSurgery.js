const express = require('express');
const router = express.Router();
const PlasticSurgery = require('../models/PlasticSurgery');

router.post('/', async(req,res) =>{
    try{
        const newEntry = new PlasticSurgery(req.body);
        await newEntry.save();
        res.json({success:true , message:"data successfully saved"});
    } catch(error){
        res.status(500).json({success:false, message:"Failed to save data"});
    }
});

module.exports = router;
