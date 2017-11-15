var angular = require('angular')
var ngRoute = require('angular-route')

angular.module('chatRoom',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/index.html"
  })
}])

// require('./controllers/login.js')
