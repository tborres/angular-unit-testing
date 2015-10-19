'use strict';

require('app');
require('angular-mocks');

var _ = require('lodash');

describe('VoteController', function() {
  var vm;
  var LanguageVotesService;

  beforeEach(angular.mock.module('b2io.angular-unit-testing'));

  beforeEach(inject(function(_LanguageVotesService_) {
    LanguageVotesService = _LanguageVotesService_;
  }));

  function _setup(options) {
    var params = _.defaults(options || {}, {});

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
  });

  describe('vm.submit', function() {
    beforeEach(function() {
      spyOn(LanguageVotesService, 'add');

      vm.submit('C', 'Ada', 'Lovelace');
    });

    it('should add language', function() {
      expect(LanguageVotesService.add).toHaveBeenCalledWith('C', 'Ada', 'Lovelace');
    });
  });
});
