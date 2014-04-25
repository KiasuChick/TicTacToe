var TTT_ctrl = function($scope){

$scope.cells = ['','','','','','','','',''];
$scope.isXTurn = true;
$scope.makeMove = function (clickedCell) {
cell = $scope.cells;




if ($scope.cells[clickedCell] != "X" && $scope.cells[clickedCell] != "O") {
$scope.cells[clickedCell] = $scope.isXturn? "X" : "O";
$scope.isXturn = !$scope.isXturn;
}


}
};