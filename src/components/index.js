'use strict';
var angular = require('angular');

var labelCount = require('./label-count/label-count.directive');

module.exports = angular.module('b2io.angular-unit-testing.components', [])
  .directive('labelCount', labelCount);
