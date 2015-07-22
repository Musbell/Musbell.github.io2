angular.module('profView', [])

.controller('ProfViewCtrl', [
    '$scope', '$location', '$routeParams',
    function ($scope, $location, $routeParams) {
        $scope.profile_view = function () {
            $location.path("../../../partials/Profile view.html");
        };
       
        }
])