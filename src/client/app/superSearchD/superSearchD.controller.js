(function() {
  'use strict';

  angular
    .module('app.superSearchD')
    .controller('superSearchDController', superSearchDController);

  superSearchDController.$inject = ['logger','$window','$state'];
  /* @ngInject */
  function superSearchDController(logger,$window,$state) {
    var vm = this;

    vm.createCampaign = function(){
      console.log('state.go');
      $state.go('campaignSettings');

    };

    console.log('I loaded the controller');

    vm.alertMe = function() {
      setTimeout(function() {
        $window.alert('You\'ve selected the alert tab!');
      });
    };

    vm.model = {
      name: 'Tabs'
    };

    vm.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
    vm.title = 'superSearchD';

    activate();

    function activate() {
      //logger.info('Activated superSearchD View');
    }
  }
})();

