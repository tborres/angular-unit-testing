'use strict';

require('app');
require('angular-mocks');

var _ = require('lodash');
var Person = require('./../../models/Person/Person');
var VoteTally = require('./../../models/VoteTally/VoteTally');

describe('VoteTallyController', function() {
  var vm;
  var votes;

  var $q;
  var $rootScope;
  var $state;
  var VoteModalService;

  beforeEach(angular.mock.module('b2io.angular-unit-testing'));

  function _setup(options) {
    votes = [new VoteTally('Ada', 2, [new Person('Lovelace', 'Ada'), new Person('Babbage', 'Charles')])];

    var params = _.defaults(options || {}, {
      votes: votes,
    });

    inject(function($controller, _VoteModalService_, _$q_, _$rootScope_) {
      $q = _$q_;
      $rootScope = _$rootScope_;
      $state = {reload: jasmine.createSpy('$state.reload')};
      VoteModalService = _VoteModalService_;
      vm = $controller('VoteTallyController', {
        votes: params.votes,
        $state: $state,
        VoteModalService: VoteModalService,
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

  describe('vm.addVote', function() {
    beforeEach(function() {
      spyOn(VoteModalService, 'show').and.returnValue($q.when());

      vm.addVote('Sql');
      $rootScope.$apply();
    });

    it('should call modal service', function() {
      expect(VoteModalService.show).toHaveBeenCalledWith('Sql');
    });

    it('should reload the state', function() {
      expect($state.reload).toHaveBeenCalled();
    });
  });
});
