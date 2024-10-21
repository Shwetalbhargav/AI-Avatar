const mongoose = require('mongoose');

const PlasticSurgerySchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    procedureType:String,
    subprocedure:String,
    agreement:Boolean,
    });

module.exports = mongoose.model('PlasticSurgery', PlasticSurgerySchema);    