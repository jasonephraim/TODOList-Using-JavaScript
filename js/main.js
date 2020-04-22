// declaring global variables from add task html fields and ul elements

let taskInput = document.getElementById("new-task"); //Add a new task.
let addTaskButton = document.getElementsByTagName("button")[0]; //first button
let incompleteTaskHolder = document.getElementById("incomplete-tasks"); //ul of #incomplete-tasks
let completedTaskHolder = document.getElementById("completed-tasks"); //completed-tasks
let completeTaskCheckbox = document.querySelector("input[id=task-checkbox]"); //task completed check box
let deleteButton = document.getElementById("deleteButton");

// click add task button enters new task

addTaskButton.addEventListener("click", function () {
  event.preventDefault();
  let taskTitle = taskInput.value;
  let liItem = document.createElement("li");
  liItem.innerHTML = `<li id='${taskTitle}-li'><form class='form-inline'><div class='form-group mb-2'><input type='checkbox' id='task-checkbox' class='form-check-input' /><label>${taskTitle}</label><button id='deleteButton' class='btn btn-danger delete' onclick="getData()">Delete</button></div></form></li>`;

  incompleteTaskHolder.appendChild(liItem);
});

// check box moves task to corrisponding section

completeTaskCheckbox.addEventListener("change", function () {
  let item = $(this).closest("li");
  if (this.checked) {
    item.appendTo(completedTaskHolder);
  } else {
    item.appendTo(incompleteTaskHolder);
  }
});

// delete task when corrisponding delete button is clicked

deleteButton.addEventListener("click", function () {
  event.preventDefault();
  let item = $(this).closest("li");
  item.remove();
});
