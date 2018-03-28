// Code goes here

"use strict"

var todoList = {
  todos: [],
  displayTodos: function(){  
      if (this.todos.length === 0){
      console.log('Your todo list is empty!');
      } else {
       console.log("My todo list : ")
       for (var i = 0; i < this.todos.length; i++){ 
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

var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
  };

};

        //   var displayTodosButton = document.getElementById("Display-Button");
        //   var toggleAllButton = document.getElementById("Toggle-Button");
        // //2. We want to run the displayTodos method when someone clicks the display todos button
        //   displayTodosButton.addEventListener("click", function(){
        //       todoList.displayTodos();
        //       });
              
        //   toggleAllButton.addEventListener("click", function(){
        //     todoList.toggleAll();
    
  });

