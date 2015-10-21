'use strict';

require('app');
require('angular-mocks');

var _ = require('lodash');
var LanguageVote = require('./../../models/LanguageVote/LanguageVote');
var Person = require('./../../models/Person/Person');

describe('VoteModalController', function() {
  var vm;

  var $modalInstance;
  var $q;
  var $rootScope;
  var LanguageVotesService;

  beforeEach(angular.mock.module('b2io.angular-unit-testing'));

  function _setup(options) {
    var config = _.defaults(options || {}, {
      vote: 'Sql',
    });

    inject(function($controller, _$q_, _$rootScope_, _LanguageVotesService_) {
      $modalInstance = {close: jasmine.createSpy('$modalInstance.close')};
      $q = _$q_;
      $rootScope = _$rootScope_;
      LanguageVotesService = _LanguageVotesService_;
      vm = $controller('VoteModalController', {
        vote: config.vote,
        $modalInstance: $modalInstance,
        LanguageVotesService: LanguageVotesService,
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
    it('should empty vm.firstName', function() {
      expect(vm.firstName).toEqual('');
    });

    it('should empty vm.lastName', function() {
      expect(vm.lastName).toEqual('');
    });

    it('should set vm.language to param', function() {
      expect(vm.language).toEqual('Sql');
    });
  });

  describe('vm.submit', function() {
    var addedVote;

    beforeEach(function() {
      addedVote = new LanguageVote('Sql', new Person('Lovelace', 'Ada'));
      spyOn(LanguageVotesService, 'add').and.returnValue($q.when(addedVote));

      vm.submit(vm.language, 'Ada', 'Lovelace');
      $rootScope.$apply();
    });

    it('should add language', function() {
      expect(LanguageVotesService.add).toHaveBeenCalledWith('Sql', 'Ada', 'Lovelace');
    });

    it('should close modal', function() {
      expect($modalInstance.close).toHaveBeenCalledWith(addedVote);
    });
  });
});
