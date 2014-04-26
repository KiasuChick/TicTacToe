function TTTController($scope){

	$scope.cells = ["","","","","","","","","",];
	$scope.xTurn = true;	
	$scope.playerClick = function(cellindex){
	
	if($scope.cells[cellindex]==""){

	if($scope.xTurn==true){
	$scope.cells[cellindex]="X";
	$scope.xTurn = false;
	console.log("hey")}

	else {
	$scope.cells[cellindex]="O";
	$scope.xTurn = true;
	}

	 }
	else{
	$scope.cells[cellindex]=$scope.cells[cellindex];} 
	
	$scope.checkWin();
	}
	$scope.checkWin = function(cellindex){ //eight checkWin functions to see if there is a winning combination
		if( $scope.cells[0] == $scope.cells[1] && $scope.cells[1] == $scope.cells[2] && $scope.cells[2]!="") {
			console.log("winner")} //horizontal 1 wins

		else if( $scope.cells[3] == $scope.cells[4] && $scope.cells[4] == $scope.cells[5] && $scope.cells[5]!="") {
			console.log("winner")}//horizontal 2 wins
		else if( $scope.cells[6] == $scope.cells[7] && $scope.cells[7] == $scope.cells[8] && $scope.cells[8]!="") {
			console.log("winner")}//horizontal 3 wins
		else if( $scope.cells[0] == $scope.cells[3] && $scope.cells[3] == $scope.cells[6] && $scope.cells[6]!="") {
			console.log("winner")}//vertical 1 wins
		else if( $scope.cells[2] == $scope.cells[4] && $scope.cells[4] == $scope.cells[7] && $scope.cells[7]!="") {
			console.log("winner")}//vertical 2 wins
		else if( $scope.cells[2] == $scope.cells[5] && $scope.cells[5] == $scope.cells[5] && $scope.cells[8]!="") {
			console.log("winner")}//vertical 3 wins
		else if( $scope.cells[0] == $scope.cells[4] && $scope.cells[4] == $scope.cells[8] && $scope.cells[8]!="") {
			console.log("winner")}//diagonal 1 wins
		else if( $scope.cells[2] == $scope.cells[4] && $scope.cells[4] == $scope.cells[6] && $scope.cells[6]!="") {
			console.log("winner")} //diagonal 2 wins

}
$scope.checkTie = function(cellindex){ //eight checkTie functions to make sure the cells don't match
		if( $scope.cells[0] != $scope.cells[1] || $scope.cells[1] != $scope.cells[2] && $scope.cells[2]!="") {
			console.log("meh tie")}
		else if( $scope.cells[0] != $scope.cells[1] || $scope.cells[1] != $scope.cells[2] && $scope.cells[2]!="") {
			console.log("meh tie")}
}

