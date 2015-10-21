'use strict';

var PagesModule = require('pages/index');
require('angular-mocks');

describe('VoteModalService', function() {
  var service;
  var $modal;
  var $q;
  var $rootScope;

  var successHandler;
  var errorHandler;

  beforeEach(angular.mock.module(PagesModule.name));

  beforeEach(inject(function(_$httpBackend_, _$modal_, _$q_, _$rootScope_, VoteModalService) {
    $modal = _$modal_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    service = VoteModalService;

    successHandler = jasmine.createSpy('successHandler');
    errorHandler = jasmine.createSpy('errorHandler');
  }));

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  describe('.show', function() {
    beforeEach(function() {
      spyOn($modal, 'open').and.returnValue({result: $q.when('success')});
      service.show().then(successHandler, errorHandler);
      $rootScope.$apply();
    });

    it('should call $modal.open', function() {
      expect($modal.open).toHaveBeenCalled();
    });

    it('should return result', function() {
      expect(successHandler).toHaveBeenCalledWith('success');
    });
  });
});
