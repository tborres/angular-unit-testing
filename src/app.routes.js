'use strict';

var _ = require('lodash');
var VoteTally = require('./models/VoteTally/VoteTally');

/**
 * @ngInject
 */
function OnConfig($stateProvider, $urlRouterProvider) {
  // STATES
  $stateProvider
    .state('vote', {
      url: '/vote',
      controller: 'VoteController as vm',
      templateUrl: '/pages/vote/vote.html',
    })
    .state('vote-tally', {
      url: '/vote-tally',
      controller: 'VoteTallyController as vm',
      templateUrl: '/pages/vote-tally/vote-tally.html',
      resolve: {
        votes: function(LanguageVotesService) {
          return LanguageVotesService.all()
            .then(function(votes) {
              return _.chain(votes)
                .groupBy(function(vote) {
                  return vote.language;
                })
                .map(function(voteGroup, language) {
                  var voters = _.map(voteGroup, function(vote) {
                    return vote.voter.displayName();
                  });

                  return new VoteTally(language, voteGroup.length, voters);
                })
                .value();
            });
        },
      },
    });

  $urlRouterProvider.otherwise('/vote-tally');
}

module.exports = OnConfig;
