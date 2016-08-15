/* jshint -W117, -W030 */
describe('superSearchDController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.superSearchD');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('superSearchDController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('superSearchD controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of superSearchD', function() {
        expect(controller.title).to.equal('superSearchD');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
