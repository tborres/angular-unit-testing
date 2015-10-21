'use strict';

var template = require('./vote-modal.html');

/**
 * @ngInject
 */
function VoteModalService($modal) {
  function show(vote) {
    return $modal.open({
      template: template,
      controller: 'VoteModalController as vm',
      resolve: {
        vote: function() {
          return vote;
        },
      },
    }).result;
  }

  return {
    show: show,
  };
}

module.exports = VoteModalService;
