'use strict';
window.jQuery = require('jquery');

require('jquery');

var angular = require('angular');
require('angular-ui-router');
require('bootstrap-sass');

var VmFunctionController = require('./vm-function/vm-function.controller');

var requires = [
  'ui.router',
];

angular.module('b2io.angular-unit-testing', requires)
  .controller('VmFunctionController', VmFunctionController)
  .config(require('./state-provider.config.js'));
