(function() {
  'use strict';

  angular
    .module('app.jobCampaigns')
    .controller('jobCampaignsController', jobCampaignsController);

  jobCampaignsController.$inject = ['logger','$window'];
  /* @ngInject */
  function jobCampaignsController(logger,$window) {
    var vm = this;
    vm.oneAtATime = true;

    vm.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    vm.items = ['Item 1', 'Item 2', 'Item 3'];

    vm.addItem = function() {
      var newItemNo = vm.items.length + 1;
      vm.items.push('Item ' + newItemNo);
    };

    vm.status = {
      isCustomHeaderOpen: false,
      isFirstOpen: true,
      isFirstDisabled: false
    };
    vm.title = 'jobCampaigns';

    activate();

    function activate() {
     // logger.info('Activated jobCampaigns View');
    }

    vm.getContent = function() {
      console.log('Editor content:', vm.tinymceModel);
    };

    vm.setContent = function() {
      vm.tinymceModel = 'Time: ' + (new Date());
    };

    vm.tinymceOptions = {
      plugins: 'link image code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };

  }
})();

