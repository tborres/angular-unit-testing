'use strict';

/**
 * @ngInject
 */
function VoteController(LanguageVotesService) {
  // Event handlers:

  function handleSubmit(language, firstName, lastName) {
    LanguageVotesService.add(language, firstName, lastName);
  }

  // View model:
  var vm = this;
  vm.firstName = '';
  vm.lastName = '';
  vm.language = '';

  vm.submit = handleSubmit;
}

module.exports = VoteController;
