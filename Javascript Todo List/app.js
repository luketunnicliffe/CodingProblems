//Selectors


const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// shift + opt + down arrow
// copy code

//Event listeners
todoButton.addEventListener('click', addTodo);


//Functions

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    console.log('Hello');
}