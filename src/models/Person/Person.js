'use strict';

function Person(lastName, firstName) {
  this.lastName = lastName;
  this.firstName = firstName;

  this.displayName = function() {
    var display = '';
    if (this.firstName) {
      display += this.firstName.trim();
    }

    if (this.lastName) {
      if (display && display.length) {
        display += ' ';
      }

      display += this.lastName.trim();
    }

    return display;
  };
}

module.exports = Person;
