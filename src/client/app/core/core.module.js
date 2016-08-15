(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize','ngTouch',
      'blocks.exception', 'blocks.logger', 'blocks.router',
      'ui.router', 'ngplus', 'ui.bootstrap','ui.tinymce'
    ]);
})();
