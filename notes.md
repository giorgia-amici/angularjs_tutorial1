to communicate with the server you use the $http
  

  $http is a server provided by angular and is an object with methods to do http calls:
  	1. GET => read info from server
  	2. POST => modify data
  	3. PUT => modify data
  	4. DELETE => modify data


 in a case like this:

		 var myController = function($scope, $http){
		 	$scope.user = $http.get("/user/1234");
		 };

		 
 the problem is that I am trying to save the result of the $http get request in $scope.user. THE PROBLEM is that $http dnt return all the data you need immediately => ASYNCHRONOS
 What th $http method does it RETURNS A PROMISE OBJECT(immediately)


 so in my example:

 var myController = function($scope, $http){

		 var promise = $http.get("/user/1234");
		 promise.then(function(response){
		 $scope.user = response.data;
		 });
		 };