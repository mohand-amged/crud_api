// app.js
const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Mount the router under `/api`
const coursesRouter = require('./routes/courses.route');
app.use('/api', coursesRouter); // Now routes are prefixed with `/api`

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});