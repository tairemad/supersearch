(function() {
  'use strict';

  angular
    .module('app.campaignSettings')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'campaignSettings',
        config: {
          url: '/campaignSettings',
          templateUrl: 'app/campaignSettings/campaignSettings.html',
          controller: 'AddClientCriteriaController',
          controllerAs: 'vm',
          title: 'campaignSettings',
          settings: {
            nav: 10,
            content: '<i class="fa fa-arrow-circle-down"></i> Campaign Settings'
          }
        }
      }
    ];
  }
})();
