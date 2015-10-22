'use strict';

require('./../../models/VoteTally/VoteTally');

/**
 * @ngInject
 */
function VoteTallyController(votes, $state, VoteModalService) {
  var vm = this;

  function addVote(language) {
    VoteModalService.show(language).then(function(){
      $state.reload();
    });
  }

  // View model:
  vm.votes = votes;

  vm.addVote = addVote;
}

module.exports = VoteTallyController;
