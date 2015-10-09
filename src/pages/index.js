'use strict';
var angular = require('angular');

var VoteController = require('./vote/vote.controller');
var VoteTallyController = require('./vote-tally/vote-tally.controller');

module.exports = angular.module('b2io.angular-unit-testing.pages', [])
  .controller('VoteController', VoteController)
  .controller('VoteTallyController', VoteTallyController);
