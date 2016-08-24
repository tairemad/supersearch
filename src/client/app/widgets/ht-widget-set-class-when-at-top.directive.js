(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('htWidgetSetClassWhenAtTop', htWidgetSetClassWhenAtTop);

  /* @ngInject */
  function htWidgetSetClassWhenAtTop($window) {
    //Usage:
    //<div ht-widget-header title="vm.map.title"></div>
    // Creates:
    // <div ht-widget-header=""
    //      title="Movie"
    //      allow-collapse="true" </div>
    var $win = angular.element($window);
    var directive = {
      scope: {
        'myvalue': '='
    //    'subtitle': '@',
    //    'rightText': '@',
    //    'allowCollapse': '@'
     },
     // templateUrl: 'app/widgets/widget-header.html',
      restrict: 'EA',
      link: link
    };
    return directive;

    function link(scope, element, attr) {
      var topClass = attr.htWidgetSetClassWhenAtTop  , // get CSS class from directive's attribute value
        offsetTop = element.offset().top; // get element's top relative to the document
      console.log('The value of showTopNav', scope.myvalue);
      $win.on('scroll', function (e) {
        console.log('We are scrolling');
        console.log(scope.myvalue);
        if ($win.scrollTop() >= offsetTop) {
          element.addClass(topClass);
          scope.myvalue = true;
          scope.$apply();
        } else {
          element.removeClass(topClass);
          scope.myvalue = false;
          scope.$apply();
        }
      });
    }
  }
})();


