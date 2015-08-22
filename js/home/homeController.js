/**
 * Created by Parag on 22/08/15.
 */


(function () {
    'use strict';

    // register the controller as AdminController
    angular
        .module('app.home',[])
        .controller('homeController', AdminController);

 //    AdminController.$inject = ["$scope","$rootScope",'$http','$stateParams','$mdToast'];

    /**
     * AdminController constructor
     */
    function AdminController() {
        // var vm = this;
    }

})();
