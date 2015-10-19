'use strict';

var angular = require('angular');
require('angular-mocks');

var LanguageVote = require('./models/LanguageVote/LanguageVote');
var Person = require('./models/Person/Person');

module.exports = angular.module('b2io.angular-unit-testing.runtime-mocks', ['ngMockE2E'])
  .run(function($httpBackend) {
    var votes = [
      new LanguageVote('C', new Person('Miller', 'Dade')),
      new LanguageVote('Perl', new Person('Jolie', 'Kate')),
      new LanguageVote('Perl', new Person('Lillard', 'Cereal')),
      new LanguageVote('javascript', new Person('Bradford', 'Joey')),
      new LanguageVote('javascript', new Person('Mason', 'Nikon')),
    ];

    $httpBackend.whenGET('/languagevotes').respond(200, votes);
    $httpBackend.whenPUT('/languagevotes').respond(function(method, url, data) {
      var json = JSON.parse(data);
      var vote = new LanguageVote(json.language, new Person(json.lastName, json.firstName));
      votes.push(vote);
      return vote;
    });

    // For everything else, don't mock
    $httpBackend.whenGET(/\w+.*/).passThrough();
    $httpBackend.whenPOST(/\w+.*/).passThrough();
    $httpBackend.whenPUT(/\w+.*/).passThrough();
    $httpBackend.whenDELETE(/\w+.*/).passThrough();
  });
