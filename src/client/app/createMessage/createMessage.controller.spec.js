/* jshint -W117, -W030 */
describe('createMessageController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.createMessage');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('createMessageController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('createMessage controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of About', function() {
        expect(controller.title).to.equal('Create Message');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
