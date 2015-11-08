'use strict';

require('./../../models/VoteTally/VoteTally');

/**
 * @ngInject
 */
function VoteTallyController($state, VoteModalService, votes) {
  var vm = this;

  function addVote(language) {
    VoteModalService.show(language).then(function() {
      $state.reload();
    });
  }

  // View model:
  vm.votes = votes;

  vm.addVote = addVote;
}

module.exports = VoteTallyController;
