const express = require('express');
const userRoutes = require('./routes/routes');
require('dotenv').config();

const app = express();
const port = process.env.BACKEND_PORT || 4000;

app.use(express.json());
app.use('/api', userRoutes);

app.get('/some', (req:any, res:any) => {
  res.send('Hello from some route');
});

// Basic error handling middleware
app.use((err:any, req:any, res:any, next:any) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
