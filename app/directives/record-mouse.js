
/**
 * ------------------------------------------------------------------------
 * Mouse Recorder directive
 * ------------------------------------------------------------------------
 */

angular.module('multiMouseApp')
  
  /* Ui-Reference with Status
  --------------------------- */
  .directive('recordMouse', function (currentMouse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        element.on('mousemove', function (e) {
          currentMouse.top     = e.y;
          currentMouse.left    = e.x;
          currentMouse.movedAt = new Date;

          currentMouse.$save();
        });
      }
    };
  })