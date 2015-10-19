'use strict';

require('./../../models/VoteTally/VoteTally');

/**
 * @ngInject
 */
function VoteTallyController(votes) {
  var vm = this;

  // View model:
  vm.votes = votes;
}

module.exports = VoteTallyController;
