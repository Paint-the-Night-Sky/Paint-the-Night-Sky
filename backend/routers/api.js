const express = require('express');
const apiController = require('../controllers/apiController.js')
const router = express.Router();


router.post('/starChart', apiController.starChartData, (req, res)=> {
    res.status(200).json(res.locals.starChart);
} )


/* 


/starchart 

/moonphase

/meteor

/events

/satellite



*/

module.exports = router;