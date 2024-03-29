﻿angular.module("safhrms",
   [
       'ngRoute',
       'ngAnimate',
              'profDetail',
       'leaveModule',
       'profDetail',
       'PromotionModule'
   ])
       .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
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
                 when("/educational background update/:index", {
                     controller: "editEduBackgroundCtrl",
                     templateUrl: "../../../Edit pages/Edit_educational background.html"
                 }).
                 when("/Leave update/:index", {
                     controller: "LeaveCtrl",
                     templateUrl: "../../../Edit pages/Edit_Leave.html"
                 }).
                 when("/Promotion update/:index", {
                     controller: "editPromotionCtrl",
                     templateUrl: "../../../Edit pages/Edit_promotion.html"
                 }).
                 when("/Leave table", {
                     controller: "LeaveCtrl",
                     templateUrl: "../../../tables/LeaveTable.html"
                 }).
               otherwise({
                   redirectTo: '/personal details update'
               });
        }])



