'use strict';

require('./../Person/Person');

function VoteTally(voteItem, count, voters) {
  this.voteItem = voteItem;
  this.count = count;
  this.voters = voters;
}

module.exports = VoteTally;
