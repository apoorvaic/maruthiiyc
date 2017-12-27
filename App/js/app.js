var myModule = angular.module('myModule', ['ngAnimate', 'ngTouch', 'ngRoute']);

myModule.config(function($routeProvider){
    
    $routeProvider.
    when('/', 
         { 
        templateUrl: '/pages/index.html', 
        activetab: 'home' 
         }).
    when('/about',{
        templateUrl: '/pages/about.html',
        //controller: 'aboutCtrl',
        activetab: 'about'

    }).
     when('/vision',{
        templateUrl: '/pages/vision.html',
        //controller: 'aboutCtrl',
        activetab: 'vision'

    }).
        otherwise({ redirectTo: '/' });
    
}).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {
        
        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
            if($scope.part == 'about'){
                 $scope.hideImg = true;
            }
            if($scope.part == 'home'){
                 $scope.hideImg = false;
            }
            console.log($scope.part);
        });

        // onclick event handlers
        $scope.showForm = function () {
          $('.contactRow').slideToggle();
        };
        $scope.closeForm = function () {
          $('.contactRow').slideUp();
        };

        // save the 'Contact Us' form
        $scope.save = function () {
          $scope.loaded = true;
          $scope.process = true;
          $http.post('sendemail.php', $scope.message).success(function () {
              $scope.success = true;
              $scope.process = false;
          });
        };
  }]);

myModule.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);




myModule.controller('MainCtrl', function ($scope) {
  
    // Set of Photos
    $scope.photos = [
        {src: '../images/Maruthi_img_1.jpg', desc: 'Image 01'},
        {src: '../images/Maruthi_img_2.jpg', desc: 'Image 02'},
        {src: '../images/Maruthi_img_3.jpg', desc: 'Image 03'},
        {src: '../images/Maruthi_img_4.jpg', desc: 'Image 04'},
         {src: '../images/Maruthi_img_5.jpg', desc: 'Image 05'},
        {src: '../images/Maruthi_img_6.jpg', desc: 'Image 06'},
        {src: '../images/Maruthi_img_7.jpg', desc: 'Image 07'}
        
    ];
        
    
    // initial image index
    $scope._Index = 0;
    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };
    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };
    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
      
    
    });


