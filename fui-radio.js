'use strict';

/**
 * @ngdoc directive
 * @name fui.radio.directive:fuiRadio
 * @description
 * # fuiCheckbox
 */
angular.module('fui.radio',[])
  .directive('fuiRadio', function () {
      return {
          restrict: 'E',
          templateUrl: 'views/directive_templates/fui-radio.html',
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