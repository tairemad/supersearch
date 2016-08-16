/* jshint -W117, -W030 */
describe('addClientCriteria routes', function() {
  describe('state', function() {
    var view = 'app/addClientCriteria/addClientCriteria.html';

    beforeEach(function() {
      module('app.addClientCriteria', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should map state addClientCriteria to url / ', function() {
      expect($state.href('addClientCriteria', {})).to.equal('/');
    });

    it('should map /addClientCriteria route to addClientCriteria View template', function() {
      expect($state.get('addClientCriteria').templateUrl).to.equal(view);
    });

    it('of addClientCriteria should work with $state.go', function() {
      $state.go('addClientCriteria');
      $rootScope.$apply();
      expect($state.is('addClientCriteria'));
    });
  });
});
