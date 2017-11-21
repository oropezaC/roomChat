var angular = require('angular')
var ngRoute = require('angular-route')

angular.module('chatRoom',['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/layouts/home.html"
  })
  .when("/login", {
    templateUrl : "views/layouts/login.html"
  })
  .when("/registro", {
    templateUrl : "views/layouts/registro.html"
  })
  .otherwise({redirectTo:'/'});

})

// require('./controllers/login.js')
