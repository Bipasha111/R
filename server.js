const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')

// Middleware
app.use(express.json());
app.use(cors())

const dbConnect = require('./dbConnect')
const routes = require('./routes/students')

// Routes
app.use('/api/students', routes);



dbConnect()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
