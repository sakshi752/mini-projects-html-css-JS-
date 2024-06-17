const todoFrom =document.querySelector('.todo-form');

const loadTodos=()=>{
    const todos=JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach((todos)=>{})
    addTodo(todos);

    // if (todos.) {
        
    // }
}

const addTodo=(todo,index)=>{
    const todos=JSON.parse(localStorage.getItem('todos')) || [];
}
const deleteTodo=(index)=>{

}

const updateTodo=(index)=>{

}

todoFrom.addEventListener("submit",(event)=>{
    event.preventDefault();
    const todo=document.querySelector(".todo-input").value.trim();
    if(todo){
        addTodo(todo);
        todo.value=''
    }
    else{
        alert('enter proper details')
    }
});

window.addEventListener('load',loadTodos);