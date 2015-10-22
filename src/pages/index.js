'use strict';
var angular = require('angular');
require('angular-ui-bootstrap');

var VoteController = require('./vote/vote.controller');
var VoteModalController = require('./vote-modal/vote-modal.controller');
var VoteModalService = require('./vote-modal/vote-modal.service');
var VoteTallyController = require('./vote-tally/vote-tally.controller');

module.exports = angular.module('b2io.angular-unit-testing.pages', ['ui.bootstrap'])
  .controller('VoteController', VoteController)
  .controller('VoteModalController', VoteModalController)
  .service('VoteModalService', VoteModalService)
  .controller('VoteTallyController', VoteTallyController);
