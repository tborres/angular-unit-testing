'use strict';

var ServicesModule = require('services/index');
require('angular-mocks');

describe('LanguageVotesService', function() {
  var service;
  var $httpBackend;

  var successHandler;
  var errorHandler;

  beforeEach(angular.mock.module(ServicesModule.name));

  beforeEach(inject(function(_$httpBackend_, LanguageVotesService) {
    $httpBackend = _$httpBackend_;
    service = LanguageVotesService;

    successHandler = jasmine.createSpy('successHandler');
    errorHandler = jasmine.createSpy('errorHandler');
  }));

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  describe('.add', function() {
    var requestData;
    var response;

    beforeEach(function() {
      requestData = {
        language: 'javascript',
        firstName: 'Brendan',
        lastName: 'Eich',
      };
    });

    describe('on success', function() {
      beforeEach(function() {
        response = {server: 'response'};

        $httpBackend.whenPUT('/languagevotes').respond(200, response);
        service.add('javascript', 'Brendan', 'Eich').then(successHandler, errorHandler);
        $httpBackend.flush();
      });

      it('should PUT /languagevotes', function() {
        $httpBackend.expectPUT('/languagevotes', requestData);
      });

      it('should call successHandler', function() {
        expect(successHandler).toHaveBeenCalledWith(response);
      });
    });

    describe('on error', function() {
      beforeEach(function() {
        response = {error: 'error message'};

        $httpBackend.whenPUT('/languagevotes').respond(500, response);
        service.add('javascript', 'Brendan', 'Eich').then(successHandler, errorHandler);
        $httpBackend.flush();
      });

      it('should call errorHandler', function() {
        expect(errorHandler).toHaveBeenCalledWith(response);
      });
    });
  });

  describe('.all', function() {
    var response;

    describe('on success', function() {
      beforeEach(function() {
        response = {server: 'response'};

        $httpBackend.whenGET('/languagevotes').respond(200, response);
        service.all().then(successHandler, errorHandler);
        $httpBackend.flush();
      });

      it('should GET /languagevotes', function() {
        $httpBackend.expectGET('/languagevotes');
      });

      it('should call successHandler', function() {
        expect(successHandler).toHaveBeenCalledWith(response);
      });
    });

    describe('on error', function() {
      beforeEach(function() {
        response = {error: 'error message'};

        $httpBackend.whenGET('/languagevotes').respond(500, response);
        service.all().then(successHandler, errorHandler);
        $httpBackend.flush();
      });

      it('should call errorHandler', function() {
        expect(errorHandler).toHaveBeenCalledWith(response);
      });
    });
  });
});
