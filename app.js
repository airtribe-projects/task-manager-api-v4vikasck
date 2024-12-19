const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./tasks');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});