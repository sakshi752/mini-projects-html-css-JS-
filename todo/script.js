const todoLists = document.querySelector('.todoList');

const getTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const loadTodos = () => {
    const todos = getTodos();
    todos.forEach(todoObj => {
        addTodoToDOM(todoObj.todo);
    });
}

const addToStorage = (todo) => {
    const todos = getTodos();
    todos.push({ todo });
    localStorage.setItem('todos', JSON.stringify(todos));
}

const updateStorage = (oldTodo, newTodo) => {
    let todos = getTodos();
    todos = todos.map(todoObj => todoObj.todo === oldTodo ? { todo: newTodo } : todoObj);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const removeFromStorage = (todo) => {
    let todos = getTodos();
    todos = todos.filter(todoObj => todoObj.todo !== todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const addTodoToDOM = (todo) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo');
    todoItem.innerHTML = `
        <span class="todo-text">${todo}</span>
        <input type="text" class="edit-input" value="${todo}" style="display: none;">
        <button class="editButton">Edit</button>
        <button class="saveButton" style="display: none;">Save</button>
        <button class="deleteButton">Delete</button>
    `;

    // Add event listeners to the buttons
    todoItem.querySelector('.editButton').addEventListener('click', () => editTodo(todo));
    todoItem.querySelector('.saveButton').addEventListener('click', () => saveTodo(todo));
    todoItem.querySelector('.deleteButton').addEventListener('click', () => deleteTodo(todo));

    todoLists.appendChild(todoItem);
}


const addTodo = (todo) => {
    addToStorage(todo);
    addTodoToDOM(todo);
}

const deleteTodo = (todo) => {
    removeFromStorage(todo);
    const todoItems = document.querySelectorAll('.todo');
    todoItems.forEach(item => {
        if (item.querySelector('.todo-text').textContent === todo) {
            todoLists.removeChild(item);
        }
    });
}

const editTodo = (todo) => {
    const todoItems = document.querySelectorAll('.todo');
    todoItems.forEach(item => {
        const textElement = item.querySelector('.todo-text');
        const editInput = item.querySelector('.edit-input');
        const editButton = item.querySelector('.editButton');
        const saveButton = item.querySelector('.saveButton');

        if (textElement.textContent === todo) {
            textElement.style.display = 'none';
            editInput.style.display = 'inline';
            editButton.style.display = 'none';
            saveButton.style.display = 'inline';
        }
    });
}

const saveTodo = (oldTodo) => {
    const todoItems = document.querySelectorAll('.todo');
    todoItems.forEach(item => {
        const textElement = item.querySelector('.todo-text');
        const editInput = item.querySelector('.edit-input');
        const editButton = item.querySelector('.editButton');
        const saveButton = item.querySelector('.saveButton');

        if (textElement.textContent === oldTodo) {
            const newTodo = editInput.value.trim();
            if (newTodo && newTodo !== oldTodo) {
                textElement.textContent = newTodo;
                updateStorage(oldTodo, newTodo);
            }
            textElement.style.display = 'inline';
            editInput.style.display = 'none';
            editButton.style.display = 'inline';
            saveButton.style.display = 'none';
        }
    });
}

document.querySelector('.todoForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const todoValue = document.querySelector('.todoValue').value.trim();
    if (todoValue) {
        addTodo(todoValue);
    } else {
        alert('Enter a todo value');
    }
    document.querySelector('.todoValue').value = "";
});

window.addEventListener('load', loadTodos);

// Expose deleteTodo, editTodo, and saveTodo to the global scope
// window.deleteTodo = deleteTodo;
// window.editTodo = editTodo;
// window.saveTodo = saveTodo;

