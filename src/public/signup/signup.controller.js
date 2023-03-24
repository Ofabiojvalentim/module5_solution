(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService','$timeout'];
function SignupController(MenuService,$timeout) {
  var $ctrl = this;

  $ctrl.firstname = 'FABIO';
  $ctrl.lastname = 'VALENTIM';
  $ctrl.short_name = 'SP1';
  $ctrl.email = 'test@teste.com';
  $ctrl.phone = '1234-1234';

  $ctrl.errorMsg = '';
  $ctrl.successMsg = '';

  $ctrl.category = '';
  $ctrl.number = ''


 
  //button submit action
  $ctrl.submit = function () {

    $ctrl.category = $ctrl.short_name.match(/[A-Za-z]+/g);
    $ctrl.number = $ctrl.short_name.match(/\d+/g);


  console.log($ctrl.category);
  console.log($ctrl.number);

    //$ctrl.completed = true;
    
    //var promise2 = MenuService.getMenuItems($ctrl.short_name);
    var promise = MenuService.getMenuItem($ctrl.category,$ctrl.number-1);

      promise.then(function(response) {
          
          if(response == undefined){
            $ctrl.errorMsg = "No such menu item, please try again";
            $timeout(function(){$ctrl.errorMsg = ''; },3000);
            console.log(response);
          }else{
            $ctrl.successMsg = 'Information Saved!';

            $timeout(function(){$ctrl.successMsg = ''; },3000);

            MenuService.saveSignupInfo(response);
            MenuService.saveDishNumber($ctrl.number);
            MenuService.saveCategory($ctrl.category.toString());
            MenuService.saveUser($ctrl.lastname);

          }
          
          //$ctrl.successMsg = "Menu item saved"
          
          //$ctrl.errorMsg = '';
          
        }, function(reason) {
          
          console.log('Failed');
          console.log(reason);
          $ctrl.errorMsg = "No such menu item, please try again";
          $ctrl.successMsg = '';
          $timeout(function(){$ctrl.errorMsg = ''; },3000);
        });
    

  };

}


})();