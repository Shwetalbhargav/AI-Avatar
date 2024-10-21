const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const PlasticSurgeryRoutes = require('./api/PlasticSurgery');
const DrugTrialRoutes = require('./api/DrugTrial');

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/plastic-surgery', PlasticSurgeryRoutes);
app.use('/api/drug-trial', DrugTrialRoutes);

//MongoDbConnection

mongoose.connect(process.env.MONGO_URI, )
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err));

    const PORT = process.env.PORT  || 5000
    app.listen(PORT, ()  => console.log(`Server running on port ${PORT}`));

