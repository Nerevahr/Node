var express = require('express');
var logger = require('morgan');
var app = express();


var membersRouter = require('./routes/members');
var ticketsRouter = require('./routes/tickets');
var tasksRouter = require('./routes/tasks');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/members', membersRouter);
app.use('/tickets', ticketsRouter);
app.use('/tasks', tasksRouter);

module.exports = app;