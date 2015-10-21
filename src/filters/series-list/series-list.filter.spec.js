'use strict';

require('filters/index');
require('angular-mocks');

describe('seriesListFilter', function() {
  var seriesListFilter;

  beforeEach(angular.mock.module('b2io.angular-unit-testing.filters'));

  beforeEach(inject(function($filter) {
    seriesListFilter = $filter('seriesList');
  }));

  it('should display single value', function() {
    expect(seriesListFilter(['a'])).toEqual('a');
  });

  it('should display and between to values', function() {
    expect(seriesListFilter(['a', 'b'])).toEqual('a and b');
  });

  it('should series separate series with oxford series', function() {
    expect(seriesListFilter(['a', 'b', 'c'])).toEqual('a, b, and c');
  });
});
