'use strict';
window.jQuery = require('jquery');
var angular = require('angular');
require('angular-ui-router');
require('bootstrap-sass');

var PagesModule = require('./pages/index');
var ServicesModule = require('./services/index');

var requires = [
  'ui.router',
  PagesModule.name,
  ServicesModule.name,
];

if (window.self === window.top) {
  var runtimeMocks = require('./runtime.mocks');
  requires.push(runtimeMocks.name);
}

angular.module('b2io.angular-unit-testing', requires)
  .config(require('./app.routes.js'));
