/* jshint -W117, -W030 */
describe('campaignSettings routes', function() {
  describe('state', function() {
    var view = 'app/campaignSettings/campaignSettings.html';

    beforeEach(function() {
      module('app.campaignSettings', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should map state campaignSettings to url / ', function() {
      expect($state.href('campaignSettings', {})).to.equal('/');
    });

    it('should map /campaignSettings route to campaignSettings View template', function() {
      expect($state.get('campaignSettings').templateUrl).to.equal(view);
    });

    it('of campaignSettings should work with $state.go', function() {
      $state.go('campaignSettings');
      $rootScope.$apply();
      expect($state.is('campaignSettings'));
    });
  });
});
