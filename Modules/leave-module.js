angular.module('leaveModule', [])
/*.factory('leaveService', ["$rootScope", "$http", function ($rootScope, $http) {
    var svc = {};
    
    return svc;
}])*/
.controller('LeaveCtrl', ['$scope', '$location', '$routeParams', '$http',
function ($scope, $location, $routeParams, $http) {
    $http.get('../../../employee data/employee_data.json').success(function (data) {
        $scope.leaveData = data
    });
    $scope.addLeave = function () {
        $scope.leaveData.push(
{
    employee_id: $scope.newLeave.employee_id,
    leave_type: $scope.newLeave.leaveType,
    leave_benefits: $scope.newLeave.leaveBenefits,
    start_date: $scope.newLeave.startDate,
    end_date: $scope.newLeave.endDate
}
)
        $scope.newLeave.employee_id = " ";
        $scope.newLeave.leaveType = " ";
        $scope.newLeave.leaveBenefit = " ";
        $scope.newLeave.leaveBenefits = " ";
        $scope.newLeave.startDate = " ";
        $scope.newLeave.endDate = " ";
    };

    $scope.finish = function () {
        $location.path('../../../partials/profile view.html')
    };

    $scope.editLeave = function (x) {
        $location.path('/Leave update/:index' + x)
        $scope.leave = leaveData[parseInt($routeParams.index)]
    }
    $scope.saveEdit_leave = function () {
        $location.path('/leave')
    }
    $scope.cancelEdit_leave = function () {
        $location.path('/leave')
    }
    $scope.tab = true;
    $scope.toggleTable = function () {
        $scope.tab = $scope.tab === false ? true : false;
    }
}

])
