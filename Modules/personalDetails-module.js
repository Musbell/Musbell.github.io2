angular.module('profDetail', [])

    .controller('PersonalDetailsCtrl', [
    '$scope', '$location', function ($scope, $location) {
        
        $scope.saveProf = function () {
            $location.path('../../../partials/profile view.html')
                               }

        $scope.cancelProf = function () {
            $location.path('../../../partials/profile view.html')
        }


    }
    ])



