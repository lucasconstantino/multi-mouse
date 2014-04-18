/**
 * Main application module.
 */

angular.module('multiMouseApp', [
  'ngRoute',
  'ui.router',
  'firebase'
])
  
  /**
   * Application configuration.
   */
  .constant('settings', {
    firebase: {
      url: 'https://multi-mouse.firebaseio.com/'
    }
  });