document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", addTodo);
  todoList.addEventListener("click", handleTodoClick);

  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-btn">Delete</button>
            `;
      todoList.appendChild(li);
      todoInput.value = "";
    }
  }

  function handleTodoClick(e) {
    if (e.target.classList.contains("delete-btn")) {
      const li = e.target.parentElement;
      todoList.removeChild(li);
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.classList.toggle("completed");
    }
  }
});
