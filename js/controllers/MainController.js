app.controller('MainController', ['$scope', function ($scope) {
    $scope.todo = {
        title: "Things I Need to Do",
        list: ["Clean my room", "Go to the store", "Study for the coding test"]
    }

    $scope.books = {
        title: "Books I Need to Buy",
        list: []
    }
    $scope.addItem = function (itemList, item) {
        itemList.push(item)
    }
}])