(function() {
  'use strict';

  angular
    .module('app.about')
    .controller('AboutController', AdminController);

  AdminController.$inject = ['logger'];
  /* @ngInject */
  function AdminController(logger) {
    var vm = this;
    vm.title = 'About';

    activate();

    function activate() {
      logger.info('Activated About View');
    }
  }
})();
