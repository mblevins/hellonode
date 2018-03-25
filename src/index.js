'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var appRouter = express.Router();
app.use(bodyParser.json({ type: '*/*' }));
app.use("/api/v1",appRouter)

var numTasks=0;
var tasks = {};
var service = {};

appRouter.get('/health', function(req, res) {

    var result = {};
    result.status = "up";
    res.json(result);
  });

appRouter.post('/services', function(req, res) {


      console.log( "req: " + req.body.color)

      taskId=numTasks;
      numTasks=numTasks+1;
      tasks[taskId] = {};
      tasks[taskId].status = "completed";
      var result = {};
      result.taskId=taskId;
      res.json(result);
  });

appRouter.get('/tasks/:id', function(req, res) {

    if (!tasks.hasOwnProperty(req.params.id)) {
      return( res.sendStatus(404) );
    }

    res.json(tasks[req.params.id]);
  });

module.exports = app;
