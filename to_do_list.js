
// Code goes here

"use strict";

var todoList = {
  todos: [],
  displayTodos: function(){  
      if (this.todos.length === 0){
      console.log('Your todo list is empty!');
      } else {
       console.log("My todo list : ")
       for (var i = 0; i < this.todos.length; i++){ 
         if(this.todos[i].completed === true){
          console.log("(x)",this.todos[i].todoText);           
         }else{
           console.log("( )", this.todos[i].todoText);
            //print todo as normal
         }   
      }
    }
  },  
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;  
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1); 
    this.displayTodos();
  },
 toggleCompleted : function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
   
    
//     Get number of completed toDos
    for(var i=0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
        }
    }
    if(completedTodos === totalTodos){
        for (var i=0; i < totalTodos; i++){
        this.todos[i].completed = false;
         } 
      } else {  
        for (var i=0; i < totalTodos; i++){
          this.todos[i].completed = true;
         }
      }
    
      this.displayTodos()
      }
};

var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  addTextInput: function(){
    var addNewItem = document.getElementById("addTextInput");
    todoList.addTodo(addNewItem.value);
    addNewItem.value = "";
  },
  changeTodo: function(){
    var chooseTodo = document.getElementById("changeToDoPosition");
    var changeTodoText = document.getElementById("changeToDoText");
    todoList.changeTodo(chooseTodo.valueAsNumber, changeTodoText.value);
    chooseTodo.value="";
    changeTodoText.value="";
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput="";
  },
  toggleAll: function(){
    todoList.toggleAll();
  }
};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML="";
    for (var i = 0; i<todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      todoLi.textContent = todoList.todos[i].todoText;
      todosUl.appendChild(todoLi);
    }
  }  
  
  
  
  
  
  
  
};









































