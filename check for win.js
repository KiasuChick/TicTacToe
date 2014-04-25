for(i = 0; i < 3; ++i)
		{
			// Left column
			if($scope.board[0+i] != null &&
				$scope.board[0+i]==$scope.board[3+i] &&
				$scope.board[3+i]== $scope.board[6+i])
			{
				console.log("win - vertical")
			}
			if($scope.board[0+(i*3)] != null &&
				$scope.board[0]==$scope.board[1] &&
			  $scope.board[1]== $scope.board[2])
			{
				console.log("win - horizontal");
			}
		}