(function() {
  'use strict';

  angular
    .module('app.createMessage')
    .controller('createMessageController', createMessageController);

  createMessageController.$inject = ['logger'];
  /* @ngInject */
  function createMessageController(logger) {
    var vm = this;
    vm.title = 'Create Message';

    activate();

    function activate() {
      logger.info('Activated Create Message');
    }
  }
})();
