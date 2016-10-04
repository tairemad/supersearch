(function() {
  'use strict';

  angular
    .module('app.viewCampaign')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'viewCampaign',
        config: {
          url: '/viewCampaign',
          templateUrl: 'app/viewCampaign/viewCampaign.html',
          controller: 'viewCampaignController',
          controllerAs: 'vm',
          title: 'viewCampaign',
          settings: {
            nav: 15,
            content: '<i class="fa fa-lock"></i> View Campaign'
          }
        }
      }
    ];
  }
})();
