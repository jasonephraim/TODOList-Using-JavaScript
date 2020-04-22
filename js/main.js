// declaring global variables from add task html fields and ul elements

let taskInput = document.getElementById("new-task"); //Add a new task.
let addTaskButton = document.getElementsByTagName("button")[0]; //first button
let incompleteTaskHolder = document.getElementById("incomplete-tasks"); //ul of #incomplete-tasks
let completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

// click add task button enters new task

addTaskButton.addEventListener("click", function () {
  event.preventDefault();
  let taskTitle = taskInput.value;
  let liItem = document.createElement("li");
  liItem.innerHTML =
    "<li id='" +
    taskTitle +
    "'><form class='form-inline'><div class='form-group mb-2'><input type='checkbox' class='form-check-input' /><label>" +
    taskTitle +
    "</label><button class='btn btn-danger delete'>Delete</button></div></form></li>";

  incompleteTaskHolder.appendChild(liItem);
});
