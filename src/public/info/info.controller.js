(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['signupInfo','MenuService'];
function MyInfoController(signupInfo,MenuService) {
  var $ctrl = this;
  this.signup = signupInfo;
  $ctrl.signup = signupInfo;
  $ctrl.category = MenuService.getCategory();
  $ctrl.user = MenuService.getUser();

  
  console.log(signupInfo);
  console.log($ctrl.category);

}


})();