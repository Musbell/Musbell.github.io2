angular.module("profView", [])
.controller('ProfViewCtrl', ['$scope', '$location', '$http',
function ($scope, $location, $http) {
    $http.get('../../../employee data/employee_data.json').success(function (data) {
        $scope.profile = data
    });
    
}
])

