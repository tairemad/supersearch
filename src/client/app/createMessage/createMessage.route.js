(function() {
  'use strict';

  angular
    .module('app.createMessage')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'createMessage',
        config: {
          url: '/createMessage',
          templateUrl: 'app/createMessage/createMessage.html',
          controller: 'createMessageController',
          controllerAs: 'vm',
          title: 'Create Message',
          settings: {
            nav: 11,
            content: '<i class="fa fa-lock"></i> Create Message'
          }
        }
      }
    ];
  }
})();
