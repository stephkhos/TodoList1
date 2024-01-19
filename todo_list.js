// Sample tasks array for demonstration
let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName !== '') {
        const newTask = {
            name: taskName,
            completed: false
        };

        tasks.push(newTask);
        taskInput.value = ''; // Clear the input field
        displayTasks();
    } else {
        alert('Please enter a valid task name.');
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous tasks

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
            <span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">${task.name}</span>
        `;
        taskList.appendChild(taskItem);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// DOM elements
const addTaskBtn = document.getElementById('addTaskBtn');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

// Event listeners
addTaskBtn.addEventListener('click', addTask);
clearCompletedBtn.addEventListener('click', clearCompletedTasks);

// Initial display of tasks
displayTasks();
function clearAllTasks() {
    tasks = []; // Set tasks array to an empty array
    displayTasks();
}

// Add an event listener to the "Clear All Tasks" button
document.getElementById('clearAllTasksBtn').addEventListener('click', clearAllTasks);