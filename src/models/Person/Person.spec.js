'use strict';

var Person = require('./Person');

describe('Person', function() {
  var person;

  it('should exist', function() {
    expect(Person).toBeDefined();
  });

  describe('initialization', function() {
    beforeEach(function() {
      person = new Person('Turing', 'Alan');
    });

    it('should set the lastName', function() {
      expect(person.lastName).toEqual('Turing');
    });

    it('should set the firstName', function() {
      expect(person.firstName).toEqual('Alan');
    });
  });

  describe('.displayName', function() {
    it('should display first + last name', function() {
      person = new Person('Turing', 'Alan');
      expect(person.displayName()).toEqual('Alan Turing');
    });

    it('should display trim first + last name', function() {
      person = new Person('  Turing', 'Alan  ');
      expect(person.displayName()).toEqual('Alan Turing');
    });

    it('should remove empty space', function() {
      person = new Person('  ', ' ');
      expect(person.displayName()).toEqual('');
    });

    it('should display first name without last name', function() {
      person = new Person(null, 'Alan');
      expect(person.displayName()).toEqual('Alan');
    });

    it('should display last name without first name', function() {
      person = new Person('Turing');
      expect(person.displayName()).toEqual('Turing');
    });
  });
});
