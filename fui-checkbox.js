'use strict';

/**
 * @ngdoc directive
 * @name fui.switch.directive:fuiCheckbox
 * @description
 * # fuiCheckbox
 */
angular.module('fui.checkbox',[])
  .directive('fuiCheckbox', function () {
      return {
          restrict: 'E',
          templateUrl: 'views/directive_templates/fui-checkbox.html',
          replace: true,
          transclude: true,
          scope: {
              ngModel: '=',
              ngValue: '=',
              ngDisabled: '=',
              ngRequired: '='
          },
          link: function (scope, element, attrs) {
              scope.id = attrs.id;
              scope.name = attrs.name;
          }
      };
  });