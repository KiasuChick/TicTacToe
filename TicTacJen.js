var games;
var IDs;
var moveCount = 0;
var winner = false;
angular.module("TicTac", ["firebase"])
 .controller("TicTacCtrl", function($scope, $firebase){ //1

 	$scope.games = [];
    $scope.room= {};
    $scope.winmessage = "";
 	// Bring in our FireBase
 	games = new Firebase("https://tictacjen.firebaseio.com/games");
 	$scope.fbRoot = $firebase(games);

 	// Wait until everything really is loaded
 	$scope.fbRoot.$on("loaded", function() {
		IDs = $scope.fbRoot.$getIndex();
		if(IDs.length == 0)
		{
			// What???  No Board????  Let's build one.
	 		$scope.fbRoot.$add( { board:['','','','','','','','',''],
 	 			xTurn:true} );
			$scope.fbRoot.$on("change", function() {
				IDs = $scope.fbRoot.$getIndex();
				$scope.obj = $scope.fbRoot.$child(IDs[0]);
			});
		}
		else
		{
			$scope.obj = $scope.fbRoot.$child(IDs[0]);
		}

	});


 	$scope.makeMove = function(idx){
 		if($scope.obj.board[idx]=="" && winner == false)
 		{
			$scope.obj.board[idx] = $scope.obj.xTurn ? 'X' : 'O';
			$scope.obj.xTurn = !$scope.obj.xTurn;
			$scope.obj.$save();
			moveCount++;
			console.log(moveCount);
			console.log($scope.obj.board);
			if(moveCount > 4) {
				checkWin();
			}
 		}
 	};


 	checkWin = function(){
 		// Horizontal Win Conditions -- X Wins
 		if($scope.obj.board[0]==$scope.obj.board[1]&&$scope.obj.board[1]==$scope.obj.board[2]&&$scope.obj.board[2]!=""&&$scope.obj.board[2]=="X") {
 			winmessage = "X won horizontally in the top row";
 			winNote();
 		}
 		if($scope.obj.board[3]==$scope.obj.board[4]&&$scope.obj.board[4]==$scope.obj.board[5]&&$scope.obj.board[5]!=""&&$scope.obj.board[5]=="X") {
 			winmessage = "X won horizontally in the middle row";
 			winNote();
 		}
 		if($scope.obj.board[6]==$scope.obj.board[7]&&$scope.obj.board[7]==$scope.obj.board[8]&&$scope.obj.board[8]!=""&&$scope.obj.board[8]=="X") {
 			winmessage = "X won horizontally in the bottom row";
 			winNote();
 		}

 		// Horizontal Win Conditions -- O Wins
 		if($scope.obj.board[0]==$scope.obj.board[1]&&$scope.obj.board[1]==$scope.obj.board[2]&&$scope.obj.board[2]!=""&&$scope.obj.board[2]=="O") {
 			winmessage = "O won horizontally in the top row";
 			winNote();
 		}
 		if($scope.obj.board[3]==$scope.obj.board[4]&&$scope.obj.board[4]==$scope.obj.board[5]&&$scope.obj.board[5]!=""&&$scope.obj.board[5]=="O") {
 			winmessage = "O won horizontally in the middle row";
 			winNote();
 		}
 		if($scope.obj.board[6]==$scope.obj.board[7]&&$scope.obj.board[7]==$scope.obj.board[8]&&$scope.obj.board[8]!=""&&$scope.obj.board[8]=="O") {
 			winmessage = "O won horizontally in the bottom row";
 			winNote();
 		}

 		// Vertical Win Conditions -- X Wins
 		if($scope.obj.board[0]==$scope.obj.board[3]&&$scope.obj.board[3]==$scope.obj.board[6]&&$scope.obj.board[6]!=""&&$scope.obj.board[6]=="X") {
 			winmessage = "X won vertically in the left column";
 			winNote();
 		}
 		if($scope.obj.board[1]==$scope.obj.board[4]&&$scope.obj.board[4]==$scope.obj.board[7]&&$scope.obj.board[7]!=""&&$scope.obj.board[7]=="X") {
 			winmessage = "X won vertically in the middle column";
 			winNote();
 		}
 		if($scope.obj.board[2]==$scope.obj.board[5]&&$scope.obj.board[5]==$scope.obj.board[8]&&$scope.obj.board[8]!=""&&$scope.obj.board[8]=="X") {
 			winmessage = "X won vertically in the right column";
 			winNote();
 		}


 		// Vertical Win Conditions -- O Wins
 		if($scope.obj.board[0]==$scope.obj.board[3]&&$scope.obj.board[3]==$scope.obj.board[6]&&$scope.obj.board[6]!=""&&$scope.obj.board[6]=="O") {
 			winmessage = "O won vertically in the left column";
 			winNote();
 		}
 		if($scope.obj.board[1]==$scope.obj.board[4]&&$scope.obj.board[4]==$scope.obj.board[7]&&$scope.obj.board[7]!=""&&$scope.obj.board[7]=="O") {
 			winmessage = "O won vertically in the middle column";
 			winNote();
 		}
 		if($scope.obj.board[2]==$scope.obj.board[5]&&$scope.obj.board[5]==$scope.obj.board[8]&&$scope.obj.board[8]!=""&&$scope.obj.board[8]=="O") {
 			winmessage = "O won vertically in the right column";
 			winNote();
 		}

 		// Diagonal Win Conditions -- X Wins
 		if($scope.obj.board[0]==$scope.obj.board[4]&&$scope.obj.board[4]==$scope.obj.board[8]&&$scope.obj.board[8]!=""&&$scope.obj.board[8]=="X") {
 			winmessage = "X won diagonally from left to right";
 			winNote();
 		}
 		if($scope.obj.board[2]==$scope.obj.board[4]&&$scope.obj.board[4]==$scope.obj.board[6]&&$scope.obj.board[6]!=""&&$scope.obj.board[6]=="X") {
 			winmessage = "X won diagonally from right to left";
 			winNote();
 		}

 		// Diagonal Win Conditions -- O Wins
 		if($scope.obj.board[0]==$scope.obj.board[4]&&$scope.obj.board[4]==$scope.obj.board[8]&&$scope.obj.board[8]!=""&&$scope.obj.board[8]=="O") {
 			winmessage = "O won diagonally from left to right";
 			winNote();
 		}
 		if($scope.obj.board[2]==$scope.obj.board[4]&&$scope.obj.board[4]==$scope.obj.board[6]&&$scope.obj.board[6]!=""&&$scope.obj.board[6]=="O") {
 			winmessage = "O won diagonally from right to left";
 			winNote();
 		}

 		//Cat's Game
 		if(moveCount == 9 && winner == false){
 			winmessage = "Cat's Game! Everyone wins.";
 			winNote();
 		}

 		// no win, keep going
 		else {
 			// nothing
 		}

 	
 	
 		
 	};

 	// display custom win notification
 	winNote = function() {
 		winner = true;
 		document.getElementById('win').innerHTML=winmessage;
 		document.getElementById('win').style.display="block";
 	}

    // clear the board
 	 $scope.reset = function(){ 
 	 	console.log("I am resetting!");
 	 	$scope.obj.board = ['','','','','','','','',''];
 	 	moveCount = 0;
 	 	winner = false;
 	 	document.getElementById('win').style.display="none";
 	 };

 });//1