/* jshint -W117, -W030 */
describe('superSearchDController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.viewCampaign');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('viewCampaignController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('viewCampaign controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of viewCampaign', function() {
        expect(controller.title).to.equal('viewCampaign');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
