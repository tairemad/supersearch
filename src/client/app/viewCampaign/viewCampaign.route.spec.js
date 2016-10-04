/* jshint -W117, -W030 */
describe('viewCampaign routes', function() {
  describe('state', function() {
    var view = 'app/viewCampaign/viewCampaign.html';

    beforeEach(function() {
      module('app.viewCampaign', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /viewCampaign ', function() {
      expect($state.href('viewCampaign', {})).to.equal('/viewCampaign');
    });

    it('should map /viewCampaign route to admin View template', function() {
      expect($state.get('viewCampaign').templateUrl).to.equal(view);
    });

    it('of admin should work with $state.go', function() {
      $state.go('viewCampaign');
      $rootScope.$apply();
      expect($state.is('viewCampaign'));
    });
  });
});
