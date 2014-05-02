app = angular.module('ModalDemo', []);
app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});

app.controller('MyCtrl', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

$scope.positions = ['Pitchers', 'Catchers', 'Infielders', 'Outfielders'];
$scope.players =  // Pitchers
[['Homer Bailey',
'Trevor Bell',
'Jonathan Broxton',
'Aroldis Chapman',
'Nick Christiani',
'Tony Cingrani',
'Carlos Contreras',
'Daniel Corcino',
'Johnny Cueto',
'Ismael Guillon',
'David Holmberg',
'J.J. Hoover',
'Mat Latos',
'Mike Leake',
'Sam LeCure',
'Brett Marshall',
'Sean Marshall',
'Logan Ondrusek',
'Manny Parra',
'Curtis Partch',
'Chad Rogers',
'Alfredo Simon']
, // Catchers
['Tucker Barnhart',
'Devin Mesoraco',
'Brayan Pena']
, // Infielders
['Zack Cozart',
'Todd Frazier',
'Jack Hannahan',
'Brandon Phillips',
'Ramon Santiago',
'Skip Schumaker',
'Neftali Soto',
'Joey Votto'],
['Roger Bernadina',
'Jay Bruce',
'Juan Duran',
'Billy Hamilton',
'Chris Heisey',
'Ryan LaMarre',
'Ryan Ludwick',
'Donald Lutz',
'Yorman Rodriguez']];

}]);