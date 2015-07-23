angular.module("safhrms",
   [
       'ngRoute',
       'ngAnimate',
       'profView',
       'profDetail',
       'leaveModule',
       'profDetail'
   ])

   .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
               when('/profile view', {
                   templateUrl: '../../../partials/profile view.html',
                   controller: 'PersonalDetailsCtrl'
               }).
            when('/personal details update', {
                templateUrl: '../../../partials/personal details.html',
                controller: 'PersonalDetailsCtrl'
            }).
                 when('/educational background update', {
                     templateUrl: '../../../partials/educational background.html',
                     controller: 'EduBackgroundCtrl'
                 }).
                 when('/work details update', {
                     templateUrl: '../../../partials/work details.html',
                     controller: 'WorkDetailsCtrl'
                 }).
                 when('/work experience update', {
                     templateUrl: '../../../partials/work experience.html',
                     controller: 'WorkExpCtrl'
                 }).
                 when('/health details update', {
                     templateUrl: '../../../partials/health details.html',
                     controller: 'HealthDetailsCtrl'
                 }).
                 when('/leave', {
                     templateUrl: '../../../partials/leave.html',
                     controller: 'LeaveCtrl'
                 }).
                 when('/promotion', {
                     templateUrl: '../../../partials/promotion.html',
                     controller: 'PromotionCtrl'
                 }).
    when("/personal details update/:index", {
        controller: "editPersonalDetailsCtrl",
        templateUrl: "../../../partials/personal details.html"
    }).
               otherwise({
                   redirectTo: '/profile view'
               });
        }])



