/**
 * Multi-Mouse Main Controller
 */

angular.module('multiMouseApp')
  .controller('MultiMouseCtrl', ['$scope', '$interval', 'connectedMouses',
    function ($scope, $interval, connectedMouses) {

      // Make the bondage (WTF!?)
      connectedMouses.$bind($scope, 'connectedMouses');

      // Mouse cleaner.
      $interval(function() {

        var diff,
            currentTime = new Date;

        for(i in connectedMouses) {

          // Does angularFire has an easier way to grab only the data?
          if (i.indexOf('$') == 0) continue;

          if (connectedMouses[i] && connectedMouses[i].movedAt) {
            if (currentTime - new Date(connectedMouses[i].movedAt) > 20000) {
              delete connectedMouses[i];
            }
          }
        }

        connectedMouses.$save();
      }, 20000);
    }
  ]);
