'use strict';
var angular = require('angular');

var seriesList = require('./series-list/series-list.filter');

module.exports = angular.module('b2io.angular-unit-testing.filters', [])
  .filter('seriesList', seriesList);
