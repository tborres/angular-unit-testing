'use strict';
var angular = require('angular');

var LanguageVotesServices = require('./language-votes/language-votes.service.js');

module.exports = angular.module('b2io.angular-unit-testing.services', [])
  .factory('LanguageVotesService', LanguageVotesServices);
