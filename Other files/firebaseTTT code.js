var blankBoard = [[0,0,0],[0,0,0],[0,0,0]];
var gameApp = angular.module('gameApp', ["firebase"]);
gameApp.controller('TicTacController', function($scope, $firebase){

// $scope.countX = 0;
// $scope.countO = 0;
// $scope.game.rows = [ [0,0,0],[0,0,0],[0,0,0] ];
// // Track if we're player 1 or 2
var playerNum = null;

var ticTacRef = new Firebase("https://kotic.firebaseio.com/games");
var lastGame;
// Ask for all existing game info from firebase
ticTacRef.once('value', function(gamesSnapshot) {
// get the actual games data
  var games = gamesSnapshot.val();
if(games == null)
{
// No games at all, so make a new game -- As if we're Areg
lastGame = ticTacRef.push( {waiting: true} );
playerNum = 1;
}
else // I do have at least one game out there...
{
  var keys = Object.keys(games);
  var lastGameKey = keys[ keys.length - 1 ];
  var lastGame = games[ lastGameKey ];
console.log("This person's game: " + lastGameKey);
  if(lastGame.waiting)
  {
  // Currently someone is waiting -- Areg is there and we're Rocky
  // Grab from Firebase its last game object
  lastGame = ticTacRef.child(lastGameKey);
  // Set a new game on this
  lastGame.set( {countX: 0, countO: 0, waiting:false, playerTurn: 0, won: 
  false, rows: blankBoard } );
  playerNum = 2;
  }
  else
  {
  // Make a new game -- As if we're Areg
lastGame = ticTacRef.push( {waiting: true} );
playerNum = 1;
  }

// Attach the last game to what we're up to
  $scope.game = $firebase(lastGame);


};
});