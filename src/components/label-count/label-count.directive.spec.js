'use strict';

var ComponentsModule = require('components/index');
require('angular-mocks');
var _ = require('lodash');

describe('labelCountDirective', function() {
  beforeEach(angular.mock.module(ComponentsModule.name));

  var element;
  var parentScope;
  var vm;

  // Helpers:
  function _setup(options) {
    var config = _.defaults(options, {
      template: '<label-count label="vm.label" count="vm.count" on-add-vote="vm.onAddVote(vote)"></label-count>',
      vm: {},
    });

    inject(function($compile, $rootScope) {
      if (element){
        element.remove();
      }

      parentScope = $rootScope.$new();
      parentScope.vm = config.vm;

      element = $compile(config.template)(parentScope);
      parentScope.$digest();

      vm = element.isolateScope().vm;
      parentScope.$apply();

      angular.element(document.body).append(element);
    });
  }

  function _tearDown() {
    if (element) {
      element.remove();
    }
  }

  // Tests:

  afterEach(_tearDown);

  describe('vm bindings', function() {
    var addVoteCallback;

    beforeEach(function() {
      addVoteCallback = jasmine.createSpy('onAddVote');

      _setup({
        vm: {
          label: 'Sql',
          count: 2,
          onAddVote: addVoteCallback,
        },
      });
    });

    describe('vm', function() {
      it('should set vm.label', function() {
        expect(vm.label).toEqual('Sql');
      });

      it('should set vm.count', function() {
        expect(vm.count).toEqual(2);
      });
    });

    describe('bindings', function() {
      it('should display label', function() {
        expect(element.find('.label-count__label')).toHaveText('Sql');
      });

      it('should display count', function() {
        expect(element.find('.label-count__count')).toHaveText('2');
      });

      it('should trigger callback on add click', function() {
        element.find('.label-count__add').click();
        expect(addVoteCallback).toHaveBeenCalledWith('Sql');
      });
    });
  });
});
