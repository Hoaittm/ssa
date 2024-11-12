const express = require('express');
const cors = require('cors');
const userRouter = require('./src/router/userRouter');
require('./passport');
const app = express();
app.use(cors());
app.use(express.json());

// Use the userRouter for all user-related routes
app.use('/', userRouter);

app.listen(8080, () => {
    console.log('Server started on port 8080');
});
