'use strict';

// optional controllers
function HomeCtrl($scope, $http) {
}

function ProjectCtrl($scope, $http) {
}

function PrivacyCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $routeParams) {
    console.log(" Inside controller.js -- ");
    $scope.test = $routeParams.test;
   // console.log("test value ::: ", $scope.test);
    //return test;
}



