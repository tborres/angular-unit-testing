'use strict';

var VoteTally = require('./VoteTally');
var Person = require('./../Person/Person');

describe('VoteTally', function() {
  var voteTally;

  it('should exist', function() {
    expect(VoteTally).toBeDefined();
  });

  describe('initialization', function() {
    var voters;

    beforeEach(function() {
      voters = [
        new Person('Lovelace', 'Ada'),
        new Person('Babbage', 'Charles'),
      ];

      voteTally = new VoteTally('Ada', 2, voters);
    });

    it('should set voteItem', function() {
      expect(voteTally.voteItem).toEqual('Ada');
    });

    it('should set count', function() {
      expect(voteTally.count).toEqual(2);
    });

    it('should set voters', function() {
      expect(voteTally.voters).toEqual(voters);
    });
  });
});
