document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector(".task-input");
    const taskList = document.querySelector(".task-list");
  
    function addTask(taskText) {
      if (!taskText.trim()) return;
  
      const listItem = document.createElement("li");
      listItem.innerHTML = `${taskText} <button class="del-btn" aria-label="Delete ${taskText}">Delete</button>`;
      
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  
    document.querySelector(".add-btn").addEventListener('click', () => addTask(taskInput.value));
  
    taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('del-btn')) {
        taskList.removeChild(event.target.parentElement);
      }
    });
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask(taskInput.value);
        event.preventDefault();
      }
    });
  });
  