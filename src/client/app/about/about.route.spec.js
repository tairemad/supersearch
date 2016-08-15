/* jshint -W117, -W030 */
describe('about routes', function() {
  describe('state', function() {
    var view = 'app/about/about.html';

    beforeEach(function() {
      module('app.about', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /about ', function() {
      expect($state.href('about', {})).to.equal('/about');
    });

    it('should map /about route to admin View template', function() {
      expect($state.get('about').templateUrl).to.equal(view);
    });

    it('of admin should work with $state.go', function() {
      $state.go('about');
      $rootScope.$apply();
      expect($state.is('about'));
    });
  });
});
