document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.className = "todo-item";
      listItem.innerHTML = `
              <span class="task">${taskText}</span>
              <button class="delete-btn">Delete</button>
          `;
      todoList.appendChild(listItem);
      taskInput.value = "";
    }
  });

  todoList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  });
});
