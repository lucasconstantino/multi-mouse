/**
 * Connected users provider.
 */

angular.module('multiMouseApp')
  .factory('connectedMouses', ['settings', '$firebase',
    function (settings, $firebase) {
      var ref = new Firebase(settings.firebase.url + '/connected-mouses');
      return $firebase(ref);
    }
  ]);
