/* jshint -W117, -W030 */
describe('superSearchD routes', function() {
  describe('state', function() {
    var view = 'app/superSearchD/superSearchD.html';

    beforeEach(function() {
      module('app.superSearchD', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /superSearchD ', function() {
      expect($state.href('superSearchD', {})).to.equal('/superSearchD');
    });

    it('should map /superSearchD route to admin View template', function() {
      expect($state.get('superSearchD').templateUrl).to.equal(view);
    });

    it('of admin should work with $state.go', function() {
      $state.go('superSearchD');
      $rootScope.$apply();
      expect($state.is('superSearchD'));
    });
  });
});
