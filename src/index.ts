const express = require('express')
const userRoutes =require( './routes/routes')

const app = express();
const port = 4000;

app.use(express.json());
<<<<<<< HEAD
app.use('/api', userRoutes);
=======
app.use('/', userRoutes);
>>>>>>> origin/main

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
