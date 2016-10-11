(function() {
  'use strict';

  angular
    .module('app.campaignSettings')
    .controller('CampaignSettingsController', CampaignSettingsController);

  CampaignSettingsController.$inject = ['$q','$state', 'dataservice', 'logger', '$scope'];
  /* @ngInject */
  function CampaignSettingsController($q , $state , dataservice, logger, $scope) {
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

       vm.addClientCriteria = function(){
         console.log('state.go');
         $state.go('addClientCriteria');
       };

       vm.goBack = function(){
         console.log('going back');
         window.history.back();

       };

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople()];
      return $q.all(promises).then(function() {
        //logger.info('Activated CampaignSettings View');
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
