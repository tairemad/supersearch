/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('ui.tinymce', ui.tinymce)
    .constant('moment', moment);
})();
