"use strict"

var todoList = {
  todos: [],
  displayTodos: function(){  
      if (this.todos.length === 0){
      console.log('Your todo list is empty!');
      } else {
       console.log("My todo list : ")
       for (i = 0; i < this.todos.length; i++){ 
         if(this.todos[i].completed === true){
          console.log("(x)",this.todos[i].newTodo);           
         }else{
           console.log("( )", this.todos[i].newTodo);
            //print todo as normal
         }   
      }
    }
  },  
  addTodo: function(newTodo){
    this.todos.push({
      newTodo: newTodo,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function(position, newValue){
    this.todos[position] = newValue;  
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
    for(var i =0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
        }
    }
    if(completedTodos === totalTodos){
        for (var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
         } 
      } else {  
        for (var i = 0; i < totalTodos; i++){
          this.todos[i].completed = true;
         }
      }
    
      this.displayTodos()
      }
};

todoList.displayTodos();
todoList.addTodo("hello");
todoList.addTodo("You!");
todoList.toggleCompleted(0);
todoList.toggleCompleted(1);
todoList.toggleAll()
todoList.toggleAll()
