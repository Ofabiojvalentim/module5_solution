(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.signup = null;
  service.category = null;
  service.dishNumber = null;
  service.user = null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (category,item) {
    return $http.get(ApiPath + '/menu_items/'+category+'/menu_items/' + item + '.json').then(function (response) {
      return response.data;
    });
  };

  service.saveSignupInfo = function (signupdata) {
      service.signup = signupdata;
  };

  service.getSignupInfo = function () {
      return service.signup;
  };

  service.saveCategory = function (category) {
      service.category = category;
  };

  service.getCategory = function (){
    return service.category;
  };

  service.saveDishNumber = function (dish) {
      service.dishNumber = dish;
  };

  service.getDishNumber = function (){
    return service.dishNumber;
  }

  service.saveUser = function (username) {
      service.user = username;
  };

  service.getUser = function (){
    return service.user;
  }



}



})();
