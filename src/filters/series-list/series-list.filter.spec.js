'use strict';

var FiltersModule = require('filters/index');
require('angular-mocks');

describe('seriesListFilter', function() {
  var seriesListFilter;

  beforeEach(angular.mock.module(FiltersModule.name));

  beforeEach(inject(function($filter) {
    seriesListFilter = $filter('seriesList');
  }));

  it('should display single value', function() {
    expect(seriesListFilter(['a'])).toEqual('a');
  });

  it('should display `and` between to values', function() {
    expect(seriesListFilter(['a', 'b'])).toEqual('a and b');
  });

  it('should separate series with oxford comma', function() {
    expect(seriesListFilter(['a', 'b', 'c'])).toEqual('a, b, and c');
  });

  it('should be empty on empty value', function() {
    expect(seriesListFilter([])).toEqual('');
  });

  it('should be empty on undefined value', function() {
    expect(seriesListFilter()).toEqual('');
  });
});
