'use strict';

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
        votes: function(LanguageVotesService, VoteTallyTransformerService) {
          return LanguageVotesService.all()
            .then(function(votes) {
              return VoteTallyTransformerService.fromLanguageVotes(votes);
            });
        },
      },
    });

  $urlRouterProvider.otherwise('/vote-tally');
}

module.exports = OnConfig;
