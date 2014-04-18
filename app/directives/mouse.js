
/**
 * ------------------------------------------------------------------------
 * Mouse User directive
 * ------------------------------------------------------------------------
 */

angular.module('multiMouseApp')
  
  /* Ui-Reference with Status
  --------------------------- */
  .directive('mouse', function (currentMouse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        // "filter" IS NOT FUCKING WORKING!
        if (scope.mouse.uuid == currentMouse.uuid) {
          element.addClass('current-mouse');
        } else {
          scope.$watch('mouse', function(mouse) {
            element
              .css({
                top: mouse.top + 'px',
                left: mouse.left + 'px'
              });
          });
        }
      }
    };
  })