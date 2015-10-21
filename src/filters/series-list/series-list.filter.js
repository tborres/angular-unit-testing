'use strict';

/**
 * @ngInject;
 */
function seriesListFilter() {
  return function(input) {
    if (!input || !input.length) {
      return '';
    }

    var length = input.length;

    if (length === 2) {
      return input[0] + ' and ' + input[1];
    }

    return input.reduce(function(previous, current, index) {
      if (index === 0) {
        return current;
      }

      var separator = (index === (length - 1)) ? ', and ' : ', ';
      return previous + separator + current;
    });
  };
}

module.exports = seriesListFilter;
