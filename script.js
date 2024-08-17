// Function to load tasks from localStorage
function loadTasks() {
  document.querySelectorAll('.task').forEach((task, index) => {
    task.innerHTML = localStorage.getItem('task' + index) || '';
  });

  // Load reminders
  const reminders = document.querySelector('.reminders-content');
  reminders.innerHTML = localStorage.getItem('reminders') || '<p>Add your reminders here...</p>';
}

// Function to save tasks to localStorage
function saveTasks() {
  document.querySelectorAll('.task').forEach((task, index) => {
    localStorage.setItem('task' + index, task.innerHTML);
  });

  // Save reminders
  const reminders = document.querySelector('.reminders-content');
  localStorage.setItem('reminders', reminders.innerHTML);
}

// Load tasks and reminders when the page loads
window.onload = function() {
  loadTasks();

  // Add event listener to save tasks when they are edited
  document.querySelectorAll('.task').forEach((task) => {
    task.addEventListener('input', saveTasks);
  });

  // Add event listener to save reminders when they are edited
  const reminders = document.querySelector('.reminders-content');
  reminders.addEventListener('input', saveTasks);
};
