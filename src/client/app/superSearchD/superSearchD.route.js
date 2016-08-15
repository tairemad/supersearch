(function() {
  'use strict';

  angular
    .module('app.superSearchD')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'superSearchD',
        config: {
          url: '/superSearchD',
          templateUrl: 'app/superSearchD/superSearchD.html',
          controller: 'superSearchDController',
          controllerAs: 'vm',
          title: 'superSearchD',
          settings: {
            nav: 5,
            content: '<i class="fa fa-lock"></i> Super Search Dashboard'
          }
        }
      }
    ];
  }
})();
