if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    for (var i = 0, len = this.length; i < len; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

if (!('classList' in document.documentElement)) {
  (function (view) {
    if (!('Element' in view)) {
      return;
    }
    var proto = Element.prototype;
    proto.classList = {

    };
  })(window);
}


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

  document.querySelector(".add-btn").addEventListener('click', addTask);

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