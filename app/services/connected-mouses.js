/**
 * Connected users provider.
 */

angular.module('multiMouseApp')
  .factory('connectedMouses', ['settings', '$firebase',
    function (settings, $firebase) {
      var firebaseURL = 'https://'
                      + settings.firebase.base
                      + '.firebaseio.com'
                      + settings.firebase.endpoint;

      var ref = new Firebase(firebaseURL + 'connected-mouses');
      return $firebase(ref);
    }
  ]);
