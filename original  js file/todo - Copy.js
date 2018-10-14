
///•	Should store the todos array on an object
var todoList = {
	todos: [],
	//•	Should have a  display todos method. 
	displayTodos: function() {
		//Print out statement if there aren't any todo items
		if (this.todos.length === 0) {
			console.log("There aren't any todos");
		} else {
		console.log ("My Todos:")
		//loop through each item, if item is completed mark x, if not leave () empty
		for (var i = 0; i < this.todos.length; i++) {
		if (this.todos[i].completed === true) {
			console.log("(x)", this.todos[i].todoText)
		} else {
			console.log("()", this.todos[i].todoText)

		};
		}
	}
		
	},
	//•	Should have an add todo method and object
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed:false
		});
		this.displayTodos();
	},
	//•	Should have a change todo method
	changeTodo: function(position,todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},

			//•	Should have a delete todo method
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},

	//todoList toggleCompleed should change the completed property
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;  /*??????*/
		this.displayTodos();
},
	//toggleAll: If everything is true , make everything false
	//true = completed false = not completed
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		for (var i =0; i < totalTodos; i++) {
			//if completed is true increase the completed variable
			if (this.todos[i].completed === true) {
				completedTodos ++;
			}
		}//if all items are completed loop through and mark all as false
			if (completedTodos === totalTodos) {
			for (var i =0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for (var i =0; i < totalTodos; i++) {
			this.todos[i].completed = true;
		}
	}
		this.displayTodos();
	
//Otherwise make everything true
}
};
var displayTodosButton = document.getElementById("display");
var displayToggleAllButton = document.getElementById('toggle');

display.addEventListener('click', function() {
	todoList.displayTodos();
});

toggle.addEventListener('click', function(){
	todoList.toggleAll();
})



	






