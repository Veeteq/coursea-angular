(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "message";
  $scope.doCheck = function(){
	 var itemCnt = getArrayLength($scope.lunchMenu);
	 if (itemCnt == 0) {
		$scope.message = "Please enter data first";
	 } else if (itemCnt <= 3) {
		 $scope.message = "Enjoy!";
	 } else if (itemCnt > 3) {
		 $scope.message = "Too much!";
	 }
  };

	function getArrayLength(str){
	 //if string is empty return 0
      if (str.length == 0) {
		 return 0;
      }

	 //if there's a comma at the end of the string
	 //remove it for further calculation
      var tmpStr = str;
	 if (tmpStr.slice(-1) == ',') {
		tmpStr = tmpStr.slice(0, -1);
	 }

	 //Make strig an array of strings(elements)
      var arrayOfStrings = tmpStr.split(',');

	 //for each element in the array check if it is a valid "meal"
	 //empty string "", one space " " or multiple space are
	 //not considered as valid "meal"
	 var itemCnt = 0;
	 for (var i = 0; i < arrayOfStrings.length; i++) {
		 if (arrayOfStrings[i].trim().length > 0) itemCnt++;
	 }
	 return itemCnt;
	}
};

})();
