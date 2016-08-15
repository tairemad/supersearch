/* jshint -W117, -W030 */
describe('jobCampaignsController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.jobCampaigns');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('jobCampaignsController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('jobCampaigns controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of jobCampaigns', function() {
        expect(controller.title).to.equal('jobCampaigns');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
