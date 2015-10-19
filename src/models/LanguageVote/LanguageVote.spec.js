'use strict';

var LanguageVote = require('./LanguageVote');
var Person = require('./../Person/Person');

describe('LanguageVote', function() {
  var languageVote;

  it('should exist', function() {
    expect(LanguageVote).toBeDefined();
  });

  describe('initialization', function() {
    var voter;

    beforeEach(function() {
      voter = new Person('Lovelace', 'Ada');
      languageVote = new LanguageVote('Ada', voter);
    });

    it('should set language', function() {
      expect(languageVote.language).toEqual('Ada');
    });

    it('should set voter', function() {
      expect(languageVote.voter).toEqual(voter);
    });
  });
});
