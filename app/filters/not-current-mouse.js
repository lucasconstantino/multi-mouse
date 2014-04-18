/**
 * Current user's mouse.
 */

angular.module('multiMouseApp')
  .filter('notCurrentMouse', ['currentMouse',
    function (currentMouse) {
      return function (input) {
        // console.log(currentMouse);
        
        console.log(input && input[currentMouse.uuid])

        if (input && input[currentMouse.uuid]) {
          console.log(input);
        }

        return input;
      }
    }
  ]);
