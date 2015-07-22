var profDetail = angular.module('profDetail', [])
            
    .controller('ProfDetailsCtrl', [
    '$scope','$location', '$routeParams',
    function ($scope, profileView_Service, $location, $routeParams) {
        $scope.personal_details = function () {
            $location.path("/personal details update");
        }

       
        }
])



