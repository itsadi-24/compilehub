import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const {} = req.body;
});

app.listen(4000, () => {
  console.log('http://localhost:4000');
});
