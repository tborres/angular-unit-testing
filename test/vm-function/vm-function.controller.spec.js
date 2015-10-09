'use strict';

require('angular');
require('angular-mocks');
require('app');

describe('VmFunctionController', function() {
  var vm;

  beforeEach(angular.mock.module('b2io.angular-unit-testing'));

  beforeEach(inject(function($controller) {
    vm = $controller('VmFunctionController', {});
  }));

  describe('.getDisplayName', function() {
    var result;

    it('should display comma between first and second param', function() {
      result = vm.getDisplayName('Doe', 'John');
      expect(result).toEqual('Doe, John');
    });

    it('should display comma between first and second param without inadvertent whitespace', function() {
      result = vm.getDisplayName('Doe   ', '    John');
      expect(result).toEqual('Doe, John');
    });

    it('should just display last name when first undefined', function() {
      result = vm.getDisplayName('Jones');
      expect(result).toEqual('Jones');
    });

    it('should just display last name when first name whitespace', function() {
      result = vm.getDisplayName('Jones', '  ');
      expect(result).toEqual('Jones');
    });

    it('should just display first name when last undefined', function() {
      result = vm.getDisplayName(undefined, 'Madonna');
      expect(result).toEqual('Madonna');
    });

    it('should just display first name when last name whitespace', function() {
      result = vm.getDisplayName('  ', 'Madonna');
      expect(result).toEqual('Madonna');
    });
  });
});
