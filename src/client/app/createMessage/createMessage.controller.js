(function() {
  'use strict';

  angular
    .module('app.createMessage')
    .controller('createMessageController', createMessageController);

  createMessageController.$inject = ['$state','logger'];
  /* @ngInject */
  function createMessageController($state) {
    var vm = this;
    vm.title = 'Create Message';

    vm.viewCampaign = function(){
      console.log('state.go');
      $state.go('viewCampaign');
    };

    activate();

    function activate() {
     // logger.info('Activated Create Message');
    }
  }
})();
