'use strict';

var _ = require('lodash');
var VoteTally = require('./../../models/VoteTally/VoteTally');

/**
 * @ngInject;
 */
function VoteTallyTransformerService() {
  function fromLanguageVotes(languageVotes) {
    return _.chain(languageVotes)
      .groupBy(function(vote) {
        return vote.language;
      })
      .map(function(voteGroup, language) {
        var voters = _.map(voteGroup, function(vote) {
          return vote.voter.displayName();
        });

        return new VoteTally(language, voteGroup.length, voters);
      })
      .sortByOrder(['count', 'voteItem'], ['desc', 'asc'])
      .value();
  }

  return {
    fromLanguageVotes: fromLanguageVotes,
  };
}

module.exports = VoteTallyTransformerService;
