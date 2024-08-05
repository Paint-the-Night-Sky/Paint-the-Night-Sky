const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors')

const PORT = 3000;

const router = require('./routers/api')

app.use(cors());
app.use(express.json())

// add static code to serve html

app.use('/api', router);

app.get('/', (req, res)=> {
    console.log('hi')
    res.status(200).json(res.locals.starChart);
})

app.use((req, res) => res.status(404).json('No route'));


app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


  app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
});