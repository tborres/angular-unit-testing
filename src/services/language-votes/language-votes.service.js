'use strict';

/**
 * @ngInject;
 */
function LanguageVotesService($q, $http) {
  function add(language, firstName, lastName) {
    var data = {
      language: language,
      lastName: lastName,
      firstName: firstName,
    };

    return $http.put('/languagevotes', data)
      .then(function(response) {
        return response.data;
      }, function(error) {
        return $q.reject(error.data);
      });
  }

  function all() {
    return $http.get('/languagevotes')
      .then(function(response) {
        return response.data;
      }, function(error) {
        return $q.reject(error.data);
      });
  }

  return {
    add: add,
    all: all,
  };
}

module.exports = LanguageVotesService;
