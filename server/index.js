import express from 'express';

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
  console.log('Someone just fetched');

  try {
    res.header('Access-Control-Allow-Origin', '*');
    res.json({
        data:"You just fetched"
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
