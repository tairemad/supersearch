/* jshint -W117, -W030 */
describe('jobCampaigns routes', function() {
  describe('state', function() {
    var view = 'app/jobCampaigns/jobCampaigns.html';

    beforeEach(function() {
      module('app.jobCampaigns', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state jobCampaigns to url /jobCampaigns ', function() {
      expect($state.href('jobCampaigns', {})).to.equal('/jobCampaigns');
    });

    it('should map /jobCampaigns route to admin View template', function() {
      expect($state.get('jobCampaigns').templateUrl).to.equal(view);
    });

    it('of jobCampaigns should work with $state.go', function() {
      $state.go('jobCampaigns');
      $rootScope.$apply();
      expect($state.is('jobCampaigns'));
    });
  });
});
