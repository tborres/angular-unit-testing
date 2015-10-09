'use strict';

require('./../Person/Person');

function LanguageVote(language, voter) {
  this.language = language;
  this.voter = voter;
}

module.exports = LanguageVote;
