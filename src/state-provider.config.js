'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $urlRouterProvider) {
  // STATES
  $stateProvider
    .state('a', {
      url: '/a',
      controller: 'VmFunctionController as vm',
      templateUrl: './vm-function/vm-function.html',
    });

  $urlRouterProvider.otherwise('/a');
}

module.exports = OnConfig;
