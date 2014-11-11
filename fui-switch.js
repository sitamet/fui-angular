'use strict';

/**
 * @ngdoc directive
 * @name fui.switch.directive:fuiSwitch
 * @description
 * # fuiSwitch
 */
angular.module('fui.switch',[])
  .directive('fuiSwitch', function () {
      return {
          restrict: 'E',
          templateUrl: 'views/directive_templates/fui-switch.html',
          replace: true,
          scope: {
              ngModel: '=',
              ngValue: '=',
              ngDisabled: '=',
              ngRequired: '='
          },
          link: function (scope, element, attrs) {

              scope.toggle = function toggle() {
                  return (scope.ngModel = scope.ngDisabled && scope.ngModel || !scope.ngDisabled && !scope.ngModel);
              };

              scope.name = attrs.name;
              scope.onText = attrs.onText || 'ON';
              scope.offText = attrs.offText || 'OFF';

              scope.switchOnColor = 'bootstrap-switch-warning';

              if (!!attrs.onColor) {
                  scope.switchOnColor = 'bootstrap-switch-'+attrs.onColor;

              } else {
                  scope.switchOnColor = 'bootstrap-switch-primary';
              }

              if (!!attrs.offColor) {
                  scope.switchOffColor = 'bootstrap-switch-'+attrs.offColor;
              } else {
                  scope.switchOffColor = 'bootstrap-switch-default';
              }

          }
      };
  });