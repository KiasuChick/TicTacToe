function TTTController($scope){

	$scope.cells = ["","","","","","","","","",];
	$scope.xTurn = true;	
	$scope.playerClick = function(cellindex){
		if ($scope.gameOver == true){
			return;
		}
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
		//else{
		//$scope.cells[cellindex]=$scope.cells[cellindex];} = 	

		if ($scope.checkWinner() != "") {
			//alert($scope.checkWinner() + " wins the game")
				
				document.getElementById('messageDiv').innerHTML=$scope.checkWinner() + " wins the game";
				$scope.gameOver = true;
		}
		else if ($scope.movesLeft() == false) {
			document.getElementById('messageDiv').innerHTML="Cats game! (huh?)"
		}

//		$scope.checkWin();
	}

	$scope.checkWinner = function(cellindex){ //eight checkWin functions to see if there is a winning combination
		if( $scope.cells[0] == $scope.cells[1] && $scope.cells[1] == $scope.cells[2] && $scope.cells[2]!="") {
			return ($scope.cells[0])} //horizontal 1 wins
		else if( $scope.cells[3] == $scope.cells[4] && $scope.cells[4] == $scope.cells[5] && $scope.cells[5]!="") {
			return ($scope.cells[3])}//horizontal 2 wins
		else if( $scope.cells[6] == $scope.cells[7] && $scope.cells[7] == $scope.cells[8] && $scope.cells[8]!="") {
			return ($scope.cells[6])}//horizontal 3 wins
		else if( $scope.cells[0] == $scope.cells[3] && $scope.cells[3] == $scope.cells[6] && $scope.cells[6]!="") {
			return ($scope.cells[0])}//vertical 1 wins
		else if( $scope.cells[1] == $scope.cells[4] && $scope.cells[4] == $scope.cells[7] && $scope.cells[7]!="") {
			return ($scope.cells[1])}//vertical 2 wins
		else if( $scope.cells[2] == $scope.cells[5] && $scope.cells[5] == $scope.cells[8] && $scope.cells[8]!="") {
			return ($scope.cells[2])}//vertical 3 wins
		else if( $scope.cells[0] == $scope.cells[4] && $scope.cells[4] == $scope.cells[8] && $scope.cells[8]!="") {
			return ($scope.cells[0])}//diagonal 1 wins
		else if( $scope.cells[2] == $scope.cells[4] && $scope.cells[4] == $scope.cells[6] && $scope.cells[6]!="") {
			return ($scope.cells[2])} //diagonal 2 wins
		else
			return ("");

	}

	$scope.movesLeft = function(cellindex){ 
		if( $scope.cells[0] == "" || $scope.cells[1] == "" || $scope.cells[2] == "" || $scope.cells[3] == "" | $scope.cells[4] == "" || $scope.cells[5] == "" || $scope.cells[6] == "" || $scope.cells[7] == "" || $scope.cells[8] == "")
			return (true);
		else
			return (false);

			// if( $scope.cells[0] != $scope.cells[1] || $scope.cells[1] != $scope.cells[2] && $scope.cells[2]!="") {
			// 	console.log("meh tie")}
			// else if( $scope.cells[0] != $scope.cells[1] || $scope.cells[1] != $scope.cells[2] && $scope.cells[2]!="") {
			// 	console.log("meh tie")}
	}
}

