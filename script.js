window.addEventListener('load', () => { //new event listener for the load event
    todos = JSON.parse(localStorage.getItem('todos')) || []; //to exchange the data to and from the server. When receiving data from the web the data will always be a string
    const newTodoForm = document.querySelector('#new-todo-form'); 


    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();//we create a event listener for submit and prevent it from going back to default
        //object created is todo, this will take in the content, date, done and createdAt
        const todo = {
            content: e.target.elements.content.value, //The content that is created by the user input will then be shown at the To Do list
            date: e.target.elements.date.value, //The date that is created by the user will then be shown with the to do items
            done: false, //this will display the items and not done, so the checkbox will not be checked
            createdAt: new Date().getTime()
        }
        //this creates the newly created object and adds it to the list
        todos.push(todo);
        //this saves the newly created item to localStorage
        localStorage.setItem('todos', JSON.stringify(todos)); //all changes will be saved and sent back to JSON data via localStorage
        //finally we reset the form so that more items can be added
        e.target.reset();

        displayTaskElement() //calls the function to show the tasks created
    })

    displayTaskElement()

})

//create a display task function where all the list items are displayed when the 'add task' button is clicked.
function displayTaskElement() { //function is called displayTaskElement
    const todoList = document.querySelector('#todo-list'); // it creates an element 'todo-list that will display the tasks created by the user
    todoList.innerHTML = ""; //the inner HTML wil take in the todoList as an empty string, the empty string can be used later on

    todos.forEach(todo => { //the code then iterates over the array of tasks, for each array a new div will be created, calls forEach method on the array object called 'todos'
        const todoItem = document.createElement('div'); //new div called 'todo-item'
        todoItem.classList.add('todo-item'); //new div called 'todo-item'
    
        const label = document.createElement('label'); //creating a label element and assigns it to the variable
        const input = document.createElement('input'); //new input element with class name 'input and assigns it to variable, 'input'.
        const span = document.createElement('span'); //a span element is then created and assigns the variable 'span'
        const content = document.createElement('div'); //new div element is created with the name 'content'
        const date = document.createElement('div'); // new div element is created with the name 'date'
        const actions = document.createElement('div'); //new div element is created with the name 'actions'
        const edit = document.createElement('button'); //two buttons are then created: edit button and delete button
        const deleteButton = document.createElement('button');

        input.type = 'checkbox'; //This is for the checkbox next to each list item, input field with type of "checkbox" and assigns it to the variable input
        input.checked = todo.done; //This sets the value of this input field to be equal to the property done on the object that has been passed in as a parameter(todo), this means that if you click on one of these items, then its checked state will be set to true or false depending on whether or not its done
        span.classList.add('checkthrough'); //After all of the above executed, we add a class called 'checkthrough'
        
        date.classList.add('todo-date'); //creates a new <div> with the class name 'todo-date' and adds it to the content
        content.classList.add('todo-content'); // creates a <div> with the class name 'todo-content'
        actions.classList.add('actions'); //creates a new <div> with the class name 'actions' and adds it to the actions
        edit.classList.add('edit'); //creates a new button with class name 'edit' and adds it to 'edit'
        deleteButton.classList.add('delete'); //creates a new button with class name 'delete' and adds it to 'delete'
        
        date.innerHTML = `<input type="date" value="${todo.date}" readonly>`; //setting the input type to 'date' and and creates the input field for dates that has the readonly attribute turned on so that users cannot change the date after selecting
        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`; //setting the input type to 'text' and this is where the users can enter whatever they want in the text box that forms part of the todo's
        edit.innerHTML = "Edit"; //create the buttons 'edit' and 'delete' that will work as such 
        deleteButton.innerHTML = "Delete";

        label.appendChild(input); 
        label.appendChild(span); 
        actions.appendChild(edit);
        actions.appendChild(deleteButton);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(date);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem);

        if (todo.done) {
            todoItem.classList.add('done'); //this is the part where you loop through if something is done
        }

        input.addEventListener('change', (e) => {
            todo.done = e.target.checked;
            localStorage.setItem('todos', JSON.stringify(todos));

            if(todo.done){
                todoItem.classList.add("done");
            } else {
                todoItem.classList.remove("done");
            }

            displayTaskElement()
        })

        edit.addEventListener('click', (e) => {
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', (e) => {
                input.setAttribute('readonly', true);
                todo.content = e.target.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                displayTaskElement()
            })
        })

        deleteButton.addEventListener('click', (e) => {
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            displayTaskElement()
        })
    })
}

function sortAlphabetically() {
    var list, i, switching, listitems, shouldSwitch;
    list = document.getElementById('todo-list');
    switching = true;

    while (switching) {
        switching = false;
        listitems = list.getElementsByClassName('todo-item');

        for (i = 0; i < (listitems.length - 1); i++) {
            shouldSwitch = false;
            if (listitems[i].innerHTML.toLowerCase() > listitems[i + 1].innerHTML.toLocaleLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            listitems[i].parentNode.insertBefore(listitems[i + 1], listitems[i]);
            switching = true;
        }
    }
}






