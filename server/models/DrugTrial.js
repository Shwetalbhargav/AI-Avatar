const mongoose = require('mongoose');

const DrugTrialSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    trialType:String,
    agreement:Boolean,
});

module.exports = mongoose.model('DrugTrial', DrugTrialSchema );