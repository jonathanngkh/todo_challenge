describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller('ToDoController');
  }));

  it('initialises with an empty task list ', function() {
    expect(controller.taskList).toBeUndefined();
  });
});

