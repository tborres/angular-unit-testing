'use strict';

/**
 * @ngInject
 */
function VoteModalController(vote, $modalInstance, LanguageVotesService) {
  // View model:
  var vm = this;
  vm.firstName = '';
  vm.lastName = '';
  vm.language = vote;

  // Event handlers:

  function handleSubmit(language, firstName, lastName) {
    LanguageVotesService.add(language, firstName, lastName).then(
      function(languageVote) {
        $modalInstance.close(languageVote);
      }
    );
  }

  vm.submit = handleSubmit;
}

module.exports = VoteModalController;
