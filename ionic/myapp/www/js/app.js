// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])

.factory('Tasks', ['$firebaseArray', function($firebaseArray) {
  var tasksRef = new Firebase('https://flickering-inferno-6053.firebaseio.com/');
  return $firebaseArray(tasksRef);
}])

.controller('ListCtrl', function($ionicListDelegate, Tasks) {
  var vm = this;
  vm.tasks = Tasks;
  vm.addTask = function() {
    var name = prompt('What do you need to do?');
    if (name) {
      vm.tasks.$add({
        'name': name
      })
    };
  }

  vm.completeTask = function(task) {
    var taskRef = new Firebase('https://flickering-inferno-6053.firebaseio.com/' + task.$id);
    taskRef.child('status').set('completed');
    $ionicListDelegate.closeOptionButtons();
  }
})
