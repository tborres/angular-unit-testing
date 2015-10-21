'use strict';

/**
 * @ngInject
 */
function VoteController(LanguageVotesService) {
  // View model:
  var vm = this;
  vm.firstName = '';
  vm.lastName = '';
  vm.language = '';
  vm.submission = '';

  // Local logic:
  function clearInputs() {
    vm.firstName = '';
    vm.lastName = '';
    vm.language = '';
  }

  // Event handlers:

  function handleSubmit(language, firstName, lastName) {
    LanguageVotesService.add(language, firstName, lastName).then(
      function(languageVote) {
        clearInputs();
        vm.submission = languageVote.voter.displayName() +
          ' submitted the "' +
          languageVote.language +
          '" language';
      }
    );
  }

  vm.submit = handleSubmit;
}

module.exports = VoteController;
