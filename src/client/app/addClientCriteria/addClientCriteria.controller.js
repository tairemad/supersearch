(function() {
  'use strict';

  angular
    .module('app.addClientCriteria')
    .controller('AddClientCriteriaController', AddClientCriteriaController);

  AddClientCriteriaController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function AddClientCriteriaController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'superSearch',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'Add Client Criteria';

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
  }
})();
