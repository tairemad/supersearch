/* jshint -W117, -W030 */
describe('createMessage routes', function() {
  describe('state', function() {
    var view = 'app/createMessage/createMessage.html';

    beforeEach(function() {
      module('app.createMessage', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /createMessage ', function() {
      expect($state.href('about', {})).to.equal('/about');
    });

    it('should map /createMessage route to createMessage View template', function() {
      expect($state.get('createMessage').templateUrl).to.equal(view);
    });

    it('of createMessage should work with $state.go', function() {
      $state.go('createMessage');
      $rootScope.$apply();
      expect($state.is('createMessage'));
    });
  });
});
