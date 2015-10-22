'use strict';
var angular = require('angular');

var LanguageVotesService = require('./language-votes/language-votes.service');
var VoteTallyTransformerService = require('./vote-tally-transformer/vote-tally-transformer.service');

module.exports = angular.module('b2io.angular-unit-testing.services', [])
  .factory('VoteTallyTransformerService', VoteTallyTransformerService)
  .factory('LanguageVotesService', LanguageVotesService);
