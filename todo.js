
///•	Should store the todos array on an object
var todoList = {
	todos: [],
	//•	Should have an add todo method and object
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed:false
		});
	},
	//•	Should have a change todo method
	changeTodo: function(position,todoText) {
		this.todos[position].todoText = todoText;
	},

			//•	Should have a delete todo method
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},

	//todoList toggleCompleted should change the completed property
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;  /*??????*/
},
	//toggleAll: If everything is true , make everything false
	//true = completed false = not completed
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		this.todos.forEach(function(todo){
//if completed is true increase the completed variable
			if (todo.completed === true) {
			completedTodos ++;
          }
  	})
			
		//if all items are completed loop through and mark all as false
			this.todos.forEach(function(todo){
			if (completedTodos === totalTodos) {
				todo.completed = false;
				//Otherwise make everything true
			} else {
				todo.completed = true;
			}

			});
		}
	};



var handlers = {

	addTodo: function(){
		//grab the Id from html for Add text Input attribute in HTML
	var addTodoTextInput = document.getElementById('addTodoTextInput');
	//todoList.addTodo from object above. parameter is needed for this function, adding 
	//addTodoTextInput.value capture information from what's placed in text box.
	todoList.addTodo(addTodoTextInput.value);
	//clears the textbox after entering text
	addTodoTextInput.value = '';
	view.displayTodos();

},

/*	changeTodo: function() {
	var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
	var changeTodoTextInput = document.getElementById('changeTodoTextInput');
	todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
	changeTodoPositionInput.value = '';	
	changeTodoTextInput.value = '';	
	view.displayTodos();

	},*/

	deleteTodo: function(position) {
	todoList.deleteTodo(position);
	view.displayTodos();
	},

	toggleCompleted: function(position) {
	todoList.toggleCompleted(position);
	view.displayTodos();
/*	var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
	todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
	toggleCompletedPositionInput.value = '';
	view.displayTodos();*/
	
	},

	toggleAll: function(){
	todoList.toggleAll();
	view.displayTodos();

}

};



var view = { 

	displayTodos: function () {
		//select the unordered list in html
	var todosUl = document.querySelector('ul');
	//clearing the ul element
	todosUl.innerHTML= '';
	//loop through each todo item
	todoList.todos.forEach(function(todo, position) {
		//create a list item
		var todoLi = document.createElement('li');

		//create mew empty variable
		var todoTextWithCompletion = '';
		//if items are completed marek as true
			if (todo.completed === true) {
				todoTextWithCompletion = '(x)' + todo.todoText
			}else {

				todoTextWithCompletion = '( )' + todo.todoText		
			}
			
				
		todoLi.id = position;
			//.textContent grabs the text content of the element
		todoLi.textContent = todoTextWithCompletion;
		//append the li to the ul'
		todoLi.appendChild(this.createDeleteButton());
		todoLi.appendChild(this.createCompletedButton());

		todosUl.appendChild(todoLi);
		}, this);
	
},
	createDeleteButton: function () {
		var deleteButton = document.createElement('BUTTON');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
},
	createCompletedButton: function () {
		var completeButton = document.createElement('BUTTON');
		completeButton.textContent = 'Completed';
		completeButton.className = 'completeButton';
		return completeButton;
	},

	setUpEventListeners: function() {
	var todosUl = document.querySelector('ul');

	todosUl.addEventListener('click', function(event){
	var elementClicked = event.target;
	
	if (elementClicked.className === 'deleteButton') {
		handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
	} else if
		(elementClicked.className === 'completeButton') {
		handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));
	};
});
	}
};
	view.setUpEventListeners();






