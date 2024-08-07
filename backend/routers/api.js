const express = require('express');
const apiController = require('../controllers/apiController.js');
const router = express.Router();

router.post('/starChart', apiController.starChartData, (req, res) => {
  res.status(200).json(res.locals.starChart);
});

router.post('/moonChart', apiController.moonChartData, (req, res) => {
  res.status(200).json(res.locals.moonChart);
});

router.get('/events', apiController.eventsData, (req, res) => {
  res.status(200).json(res.locals.eventsData);
});

router.post('/meteorData', apiController.eventsData, (req, res) => {
  res.status(200).json(res.locals.meteorData);
});
/*  

/moonphase

/meteor

/events

/satellite



*/

module.exports = router;
