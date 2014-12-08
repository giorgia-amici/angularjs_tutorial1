(function() {
      
      var app = angular.module("gitHubViewer", []);
      var MainController = function($scope, $http) {

        var onUserComplete = function(response) {
          $scope.user = response.data;
        };

        var onError = function(reason) {
          $scope.error = "Could not fetch the user";
        };

        $http.get("https://api.github.com/users/giorgia-amici/access_token=ff8a6e78e60868859c7a61a800aaf3cb46885725").then(onUserComplete, onError);

        $scope.message = 1 + 1;

      };
    app.controller("MainController", MainController);
    }());


