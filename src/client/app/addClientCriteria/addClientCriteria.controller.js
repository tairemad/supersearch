(function() {
  'use strict';

  angular
    .module('app.addClientCriteria')
    .controller('AddClientCriteriaController', AddClientCriteriaController);

  AddClientCriteriaController.$inject = ['$q', 'dataservice', 'logger', '$scope'];
  /* @ngInject */
  function AddClientCriteriaController($q, dataservice, logger, $scope) {
    var vm = this;
    vm.news = {
      title: 'superSearch',
      description: 'Monster - Super Search'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'Add Client Criteria';
    $scope.headerRules = {};
    $scope.headerRules.showTopNav = false;
//   vm.scrollTo = scrollTo(target);

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople()];
      return $q.all(promises).then(function() {
        logger.info('Activated AddClientCriteria View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }

   // function scrollTO (target){

    //}
  }
})();
