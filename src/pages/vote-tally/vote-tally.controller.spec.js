'use strict';

require('app');
require('angular-mocks');

var _ = require('lodash');
var Person = require('./../../models/Person/Person');
var VoteTally = require('./../../models/VoteTally/VoteTally');

describe('VoteTallyController', function() {
  var vm;
  var votes;

  beforeEach(angular.mock.module('b2io.angular-unit-testing'));

  function _setup(options) {
    votes = [new VoteTally('Ada', 2, [new Person('Lovelace', 'Ada'), new Person('Babbage', 'Charles')])];

    var params = _.defaults(options || {}, {
      votes: votes,
    });

    inject(function($controller) {
      vm = $controller('VoteTallyController', {
        votes: params.votes,
      });
    });
  }

  beforeEach(function() {
    _setup();
  });

  it('should exist', function() {
    expect(vm).toBeDefined();
  });

  describe('initialization', function() {
    it('should set vm.votes', function() {
      expect(vm.votes).toEqual(votes);
    });
  });
});
