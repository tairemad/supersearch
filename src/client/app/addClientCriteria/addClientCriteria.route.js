(function() {
  'use strict';

  angular
    .module('app.addClientCriteria')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'addClientCriteria',
        config: {
          url: '/addClientCriteria',
          templateUrl: 'app/addClientCriteria/addClientCriteria.html',
          controller: 'AddClientCriteriaController',
          controllerAs: 'vm',
          title: 'addClientCriteria',
          settings: {
            nav: 6,
            content: '<i class="fa fa-arrow-circle-down"></i> Add Client Criteria'
          }
        }
      }
    ];
  }
})();
