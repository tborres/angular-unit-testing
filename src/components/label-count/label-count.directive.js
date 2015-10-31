'use strict';

var template = require('./label-count.html');

/**
 * @ngInject;
 */
function labelCount() {
  return {
    restrict: 'E',
    template: template,
    scope: {},
    bindToController: {
      count: '=',
      label: '=',
      onAddVote: '&',
    },
    controllerAs: 'vm',

    controller: function() {
      var vm = this;

      function addVote() {
        vm.onAddVote({vote: vm.label});
      }

      vm.addVote = addVote;
    },
  };
}

module.exports = labelCount;
