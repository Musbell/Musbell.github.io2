angular.module('PromotionModule', [])
.controller('PromotionCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.PromotionData = [
        {
            name: "Bello Musa",
            leave_type: "Casual leave",
            leave_benefits: "none",
            start_date: "1 / 1 / 2015",
            end_date: "1 / 2 / 2015"
        },
        {
            name: "Biodun Rufia",
            leave_type: "Examination leave",
            leave_benefits: "none",
            start_date: "2 / 1 / 2015",
            end_date: "4 / 2 / 2015"
        }
    ];

    $scope.addProtion = function () {
        $scope.PromotionData.push(
{
    name: $scope.newLeave.name,
    leave_type: $scope.newLeave.leaveType,
    leave_benefits: $scope.newLeave.leaveBenefits,
    start_date: $scope.newLeave.startDate,
    end_date: $scope.newLeave.endDate
}
)
    };

    $scope.finish = function () {
        $location.path('../../../partials/profile view.html')
    };


}

])