const todoForm = document.querySelector('.todo-form');

const loadTodos = () => {
    const todos=JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach((todo)=>{
        addTodo(todo.todo)
    })
}

const addTodo = (todo) => {
    const todoContainer = document.createElement('li')
    todoContainer.classList.add('todo');
    todoContainer.innerHTML = `
        <div>${todo}</div>
        <div>
            <button>Delete</button>
            <button>Update</button>
        </div>
 `
 const listitems=document.getElementById('list-items');
 listitems.appendChild(todoContainer)
}
const deleteTodo = () => {

}

const updateTodo = (index) => {

}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoInput = document.querySelector(".todo-input");
    const todo = todoInput.value.trim();
    if (todo) {
        addTodo(todo);
        const todoObj = { todo };
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todoObj);
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
    } else {
        alert('Enter proper details');
    }
});

window.addEventListener('load', loadTodos);