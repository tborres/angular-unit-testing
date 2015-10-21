'use strict';

var angular = require('angular');
require('angular-mocks');

var LanguageVote = require('./models/LanguageVote/LanguageVote');
var Person = require('./models/Person/Person');

module.exports = angular.module('b2io.angular-unit-testing.runtime-mocks', ['ngMockE2E'])
  .run(function($httpBackend) {
    var votes = [
      new LanguageVote('Pascal', new Person('Turing', 'Alan')),
      new LanguageVote('Assembly', new Person('Knuth', 'Donald')),
      new LanguageVote('COBOL', new Person('Hopper', 'Grace')),
      new LanguageVote('Pascal', new Person('Lovelace', 'Ada')),
      new LanguageVote('C', new Person('von Neumann', 'John')),
      new LanguageVote('ALGOL', new Person('Dijkstra', 'Edsger')),
      new LanguageVote('javascript', new Person('Eich', 'Brendan')),
      new LanguageVote('javascript', new Person('Hevery', 'Misko')),
      new LanguageVote('javascript', new Person('Young', 'Alex')),
    ];

    $httpBackend.whenGET('/languagevotes').respond(200, votes);
    $httpBackend.whenPUT('/languagevotes').respond(function(method, url, data) {
      var json = JSON.parse(data);
      var vote = new LanguageVote(json.language, new Person(json.lastName, json.firstName));
      votes.push(vote);
      return [200, vote];
    });

    // For everything else, don't mock
    $httpBackend.whenGET(/\w+.*/).passThrough();
    $httpBackend.whenPOST(/\w+.*/).passThrough();
    $httpBackend.whenPUT(/\w+.*/).passThrough();
    $httpBackend.whenDELETE(/\w+.*/).passThrough();
  });
