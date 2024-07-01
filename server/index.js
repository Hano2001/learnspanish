import express from 'express';
import data from '../data.js';

const app = express();
const PORT = 3001;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/', (req, res) => {
  try {
    res.header('Access-Control-Allow-Origin', '*');
    res.json({
      data: data,
    });
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
