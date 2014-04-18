/**
 * Current user's mouse.
 */

angular.module('multiMouseApp')
  .factory('currentMouse', ['connectedMouses',
    function (connectedMouses) {
      var id = uuid.v1();
      var mouse = connectedMouses.$child(id);

      mouse.$set({
        uuid: uuid.v1(),
        top: 0,
        left: 0,
        movedAt: new Date
      });

      return mouse;
    }
  ]);
