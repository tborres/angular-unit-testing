'use strict';

var ServicesModule = require('services/index');
require('angular-mocks');

var LanguageVote = require('models/LanguageVote/LanguageVote');
var Person = require('models/Person/Person');
var VoteTally = require('models/VoteTally/VoteTally');

describe('VoteTallyTransformerService', function() {
  var service;
  var results;

  beforeEach(angular.mock.module(ServicesModule.name));

  beforeEach(inject(function(VoteTallyTransformerService) {
    service = VoteTallyTransformerService;
  }));

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  describe('.fromLanguageVotes', function() {
    describe('when empty language votes', function() {
      beforeEach(function() {
        results = service.fromLanguageVotes([]);
      });

      it('should return empty vote tallies', function() {
        expect(results).toEqual([]);
      });
    });

    describe('when language votes', function() {
      beforeEach(function() {
        results = service.fromLanguageVotes([
          new LanguageVote('C', new Person('von Neumann', 'John')),
          new LanguageVote('ALGOL', new Person('Dijkstra', 'Edsger')),
          new LanguageVote('javascript', new Person('Eich', 'Brendan')),
          new LanguageVote('javascript', new Person('Hevery', 'Misko')),
        ]);
      });

      it('should return vote tallies', function() {
        expect(results).toEqual([
          new VoteTally('javascript', 2, ['Brendan Eich', 'Misko Hevery']),
          new VoteTally('ALGOL', 1, ['Edsger Dijkstra']),
          new VoteTally('C', 1, ['John von Neumann']),
        ]);
      });
    });
  });
});
