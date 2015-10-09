'use strict';

function VmFunctionController() {
  var vm = this;

  // View Model logic:

  function getDisplayName(last, first) {
    return last + ', ' + first;
  }

  // Handlers:

  function handleClear() {
    vm.isSubmitted = false;
  }

  function handleSubmit() {
    vm.isSubmitted = true;
  }

  // View Model:
  vm.firstName = '';
  vm.lastName = '';
  vm.isSubmitted = false;

  vm.getDisplayName = getDisplayName;
  vm.clear = handleClear;
  vm.submit = handleSubmit;
}

module.exports = VmFunctionController;
