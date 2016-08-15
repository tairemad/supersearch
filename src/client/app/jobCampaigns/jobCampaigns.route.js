(function() {
  'use strict';

  angular
    .module('app.jobCampaigns')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'jobCampaigns',
        config: {
          url: '/jobCampaigns',
          templateUrl: 'app/jobCampaigns/jobCampaigns.html',
          controller: 'jobCampaignsController',
          controllerAs: 'vm',
          title: 'jobCampaigns',
          settings: {
            nav: 5,
            content: '<i class="fa fa-lock"></i> job Campaigns'
          }
        }
      }
    ];
  }
})();
