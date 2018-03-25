'use strict';

var request = require('supertest')
var express = require('express');

var app=require('../src');

 request(app)
  .get('/api/v1/health')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
