const apiController = {
  async starChartData(req, res, next) {
    let lat = req.body.lat;
    let long = req.body.long;
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
              date: '2019-12-20',
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
              date: '2024-08-05',
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
      return next();
    } catch (err) {
      return next({
        log: 'Error in moonChartData',
        status: 500,
        message: { err: 'An error occured' },
      });
    }
  },
};
module.exports = apiController;
