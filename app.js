require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const adminRouter = require('./routes/adminRoutes');
const mentorRouter = require('./routes/mentorRoutes');
const contactRouter = require('./routes/contactRoutes');
const zuriTrainingRoute = require('./routes/zuriTrainingRoute');
const zuriInternRoute = require('./routes/zuriInternRoutes');
const { handleError } = require('./utils/error');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/cvDir', express.static(path.join(__dirname, 'cvDir')));

app.use('/api/v1', adminRouter);
app.use('/api/v1', mentorRouter);
app.use('/api/v1', zuriTrainingRoute);
app.use('/api/v1', contactRouter);
app.use('/api/v1', zuriInternRoute);

// Express error middleware
app.use((err, req, res, next) => next(handleError(res, err)));

// Unknown endpoints middleware
app.use('*', (req, res) => {
  const url = req.originalUrl;
  res.status(404).send({
    status: 'error',
    message: `Oops. ${req.method} ${url} not found on this website`
  });
});

module.exports = app;
