const db = require('../data/model');

let date = new Date();
const apiController = {
  async starChartData(req, res, next) {
    let lat = req.body.lat;
    let long = req.body.long;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    try {
      let response = await fetch(
        'https://api.astronomyapi.com/api/v2/studio/star-chart',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Basic ODJkYTk1NzAtZjY5MC00NzhkLThhYjUtODgxNjAwYjg3Y2UxOjY5NDc5YmU4OGVkOTA0YzAzNDY3MzFkNDAxODJhM2Y1NGU3MzE5NmQ2Zjk5NTBjYjgyYjc0NWQxNzVkYzMwMzk0MDJjMjBhNjRhNTgyYzhjMTc4ZTQzZTFmNTMxOWNjZDkwYzExN2NlYmM0YmM0MzUwZDlmODdjOTZiM2Q5Y2EyZWZmMmYxMDI0ZjQwOWJmMWZlNjdiYzU5YzAyZjA5YTczNjdiYmIyZGQ4ZDkwM2YxY2UxMjZhOGMwNmM1YmMwMGRjZjAxYzYxY2I4MTI0OTA2ZmNlMTdhYmNhNjczNGFj',
          },
          body: JSON.stringify({
            style: 'default',
            observer: {
              latitude: lat,
              longitude: long,
              date: currentDate,
            },
            view: {
              type: 'constellation',
              parameters: {
                constellation: 'ori', // 3 letter constellation id
              },
            },
          }),
        }
      );
      response = await response.json();
      res.locals.starChart = response;
      // const queryText = `INSERT INTO public.Responses (requestType, longitude, latitude, response)
      // VALUES ($1, $2, $3, $4)`;
      // const queryValues = [
      //   // req.body.date,
      //   'Star Chart',
      //   req.body.long,
      //   req.body.lat,
      //   response,
      // ];
      // const data = await db.query(queryText, queryValues);
      // console.log(data);
      // res.locals.dbSent = data;
      return next();
    } catch (err) {
      return next({
        log: 'Error in starChartData',
        status: 500,
        message: { err: 'An error occured' },
      });
    }
  },
  async moonChartData(req, res, next) {
    let lat = req.body.lat;
    let long = req.body.long;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    try {
      let response = await fetch(
        'https://api.astronomyapi.com/api/v2/studio/moon-phase',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Basic ODJkYTk1NzAtZjY5MC00NzhkLThhYjUtODgxNjAwYjg3Y2UxOjY5NDc5YmU4OGVkOTA0YzAzNDY3MzFkNDAxODJhM2Y1NGU3MzE5NmQ2Zjk5NTBjYjgyYjc0NWQxNzVkYzMwMzk0MDJjMjBhNjRhNTgyYzhjMTc4ZTQzZTFmNTMxOWNjZDkwYzExN2NlYmM0YmM0MzUwZDlmODdjOTZiM2Q5Y2EyZWZmMmYxMDI0ZjQwOWJmMWZlNjdiYzU5YzAyZjA5YTczNjdiYmIyZGQ4ZDkwM2YxY2UxMjZhOGMwNmM1YmMwMGRjZjAxYzYxY2I4MTI0OTA2ZmNlMTdhYmNhNjczNGFj',
          },
          body: JSON.stringify({
            format: 'png',
            style: {
              moonStyle: 'default',
              backgroundStyle: 'stars',
              backgroundColor: 'red',
              headingColor: 'white',
              textColor: 'white',
            },
            observer: {
              latitude: lat,
              longitude: long,
              date: currentDate,
            },
            view: {
              type: 'portrait-simple',
              orientation: 'south-up',
            },
          }),
        }
      );
      response = await response.json();
      res.locals.moonChart = response;
      // const queryText = `INSERT INTO public.Responses (requestType, longitude, latitude, response)
      // VALUES ($1, $2, $3, $4)`;
      // const queryValues = [
      //   // req.body.date,
      //   'Moon Chart',
      //   req.body.long,
      //   req.body.lat,
      //   response,
      // ];
      // const data = await db.query(queryText, queryValues);
      // console.log(data);
      // res.locals.dbSent = data;
      return next();
    } catch (err) {
      return next({
        log: 'Error in moonChartData',
        status: 500,
        message: { err: 'An error occured in moonChartData' },
      });
    }
  },
  async meteorChartData(req, res, next) {
    let lat = req.body.lat;
    let minLat = lat - 20;
    let long = req.body.long;
    let minLong = long - 20;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    try {
      let response = await fetch(
        `https://api.meteomatics.com/${currentDate}/meteor_showers_perseids_visibility:idx/56,-10_36,20:0.05,0.05/png?source=mix`,
        {
          method: 'POST',
          headers: {
            Authorization:
              'Basic dGVzdGluZ2luY29ycG9yYXRlZF90aGllbl9hYXJvbjpvWHQ2NzdBMFNn',
          },
        }
      );
      res.locals.meteorData = await response.json();
      return next();
    } catch (err) {
      return next({
        log: 'Error in meteorData',
        status: 500,
        message: { err: 'An error occured in meteorData' },
      });
    }
  },

  async eventsData(req, res, next) {
    let lat = req.body.lat;
    let long = req.body.long;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    let monthAway = `${day}-${month + 1}-${year}`;
    try {
      let response = await fetch(
        `https://api.astronomyapi.com/api/v2/bodies/events/sun?latitude=${lat}&longitude=${long}&elevation=100&from_date=${currentDate}&to_date=${monthAway}&time=12:00:00&output=table`
      );
      const responseInfo = [
        response.data.rows[0].body,
        response.data.rows[0].events,
      ];
      res.locals.eventsData = responseInfo.json();
      return next();
    } catch (error) {
      return next({
        log: 'Error in eventstData',
        status: 500,
        message: { err: 'An error occured in eventsData' },
      });
    }
  },
};
module.exports = apiController;
/*
{
    "data": {
        "dates": {
            "from": "2020-12-20T09:00:00.000-05:00",
            "to": "2021-12-23T09:00:00.000-05:00"
        },
        "observer": {
            "location": {
                "longitude": -84.39733,
                "latitude": 38.775867,
                "elevation": 0
            }
        },
        "rows": [
            {
                "body": {
                    "id": "sun",
                    "name": "Sun"
                },
                "events": [
                    {
                        "type": "partial_solar_eclipse",
                        "eventHighlights": {
                            "partialStart": {
                                "date": "2021-06-10T03:45:15.241-05:00",
                                "altitude": -13.56
                            },
                            "totalStart": null,
                            "peak": {
                                "date": "2021-06-10T04:37:30.267-05:00",
                                "altitude": -5.85
                            },
                            "totalEnd": null,
                            "patialEnd": {
                                "date": "2021-06-10T05:32:52.677-05:00",
                                "altitude": 2.92
                            }
                        },
                        "rise": "2021-06-10T10:12:14.143Z",
                        "set": "2021-06-11T01:02:13.766Z",
                        "extraInfo": {
                            "obscuration": 0.76
                        }
                    }
                ]
            }
        ]
    }
}
    */
// https://api.meteomatics.com/2024-08-05T11:15:00.000-04:00/t_2m:C/40.730925,-73.9355578/json?model=mix
