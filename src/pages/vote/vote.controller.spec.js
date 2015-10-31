'use strict';

var PagesModule = require('pages/index');
require('angular-mocks');

var LanguageVote = require('./../../models/LanguageVote/LanguageVote');
var Person = require('./../../models/Person/Person');

describe('VoteController', function() {
  var vm;

  var $q;
  var $scope;
  var LanguageVotesService;

  beforeEach(angular.mock.module(PagesModule.name));

  beforeEach(inject(function(_$q_, $rootScope, _LanguageVotesService_) {
    $q = _$q_;
    $scope = $rootScope.$new();
    LanguageVotesService = _LanguageVotesService_;
  }));

  function _setup() {
    inject(function($controller) {
      vm = $controller('VoteController', {
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

    it('should empty vm.language', function() {
      expect(vm.language).toEqual('');
    });

    it('should empty vm.submission', function() {
      expect(vm.submission).toEqual('');
    });
  });

  describe('vm.submit', function() {
    beforeEach(function() {
      spyOn(LanguageVotesService, 'add').and.returnValue($q.when(
        new LanguageVote('C', new Person('Lovelace', 'Ada'))
      ));

      vm.language = 'C';
      vm.firstName = 'Ada';
      vm.lastName = 'Lovelace';
      vm.submit(vm.language, vm.firstName, vm.lastName);
      $scope.$apply();
    });

    it('should add language', function() {
      expect(LanguageVotesService.add).toHaveBeenCalledWith('C', 'Ada', 'Lovelace');
    });

    it('should clear inputs', function() {
      expect(vm.firstName).toEqual('');
      expect(vm.lastName).toEqual('');
      expect(vm.language).toEqual('');
    });

    it('should set vm.submission', function() {
      expect(vm.submission).toEqual('Ada Lovelace submitted the "C" language');
    });
  });
});
