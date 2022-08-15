/* The first code block is adding an event listener for the load event, the second line is to exhange data to and from the server. 
When receiving the data from the web the data gets converted into a string and stored in local storage. We then create a variable called
'newTodoForm' and add a query selector to the document that will take in information.  */
window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []; 
    const newTodoForm = document.querySelector('#new-todo-form'); 


    newTodoForm.addEventListener('submit', e => { //we create a event listener for submit and prevent it from going back to the default setting. 
        e.preventDefault();

        const todo = { //object created 'todo' this will take in the content, date and createdAt. 
            content: e.target.elements.content.value, //this will create and show the list items that was created by the user.
            done: false, //this will cause the list item to be shown as undone, which is false, when the checkbox is toggled the 'done' will go to true. 
            date: e.target.elements.date.value, //this will create and show the date input that the user created next to each list item.
            createdAt: new Date().getTime() //this will save and show when the item was created and what time in local storage.
        }

        todos.push(todo); //this takes the newly created object and adds it to the list.

        localStorage.setItem('todos', JSON.stringify(todos)); //saves the newly created item to local storage.

        e.target.reset(); //this resets the input field so that new tasks can be added again.

        displayTaskElement() //calls the function to show the tasks created
    })

    displayTaskElement()

})

//create a display task function where all the list items are displayed when the 'add task' button is clicked.
function displayTaskElement() { //function is called displayTaskElement, when this function is called the 'todoItem' that was created by the user will be displayed in the list.
    const todoList = document.querySelector('#todo-list'); //it creates an element 'todo-list' that will display tasks created by the user.
    todoList.innerHTML = ""; //the innerHTML will take in the 'todoList' as an empty string.

    todos.forEach(todo => { //the code then iterates over the array of tasks, for each array a new div will be created, calls forEach method on the array object called 'todos'.
        const todoItem = document.createElement('div'); //new <div> called 'todo-item'.
        todoItem.classList.add('todo-item'); //new <div> called 'todo-item'.
    
        const label = document.createElement('label'); //creating a label element and assigns it a variable.
        const input = document.createElement('input'); //new input element with class name 'input' assigns it to a variable, 'input'.
        const span = document.createElement('span'); //a span element is then created and assigns a variable to it 'span'.
        const content = document.createElement('div'); //new div element is created with the name 'content'.
        const date = document.createElement('div'); //new div element is created with the name 'date'.
        const actions = document.createElement('div'); //new div element is created with the name 'actions'.
        const edit = document.createElement('button'); //two buttons are then created: edit button and delete button.
        const deleteButton = document.createElement('button');

        input.type = 'checkbox'; //This is for the checkbox next to each list item input, field with type of "checkbox" and assigns it to the variable input.
        input.checked = todo.done; //This sets the value of this input field to be equal to the property done on the object that has been passed in as a parameter(todo), this means that if you click on one of these items, then its checked state will be set to true or false depending on whether or not its done.
        span.classList.add('checkthrough'); //After all of the above executed, we add a class called 'checkthrough'.
        
        date.classList.add('todo-date'); //creates new div with the class name 'todo-date' and adds it to the content.
        content.classList.add('todo-content'); //creates a div with the class name 'todo-content'.
        actions.classList.add('actions'); //creates a new div with the class name 'actions' and adds it to the actions.
        edit.classList.add('edit'); //creates a new button with the class name 'edit' and adds it to 'edit'.
        deleteButton.classList.add('delete'); //creates a new button with the class name 'delete' and adds it to 'delete'.

        date.innerHTML = `<input type="date" value="${todo.date}" readonly>`; //setting the input type to 'date' and creates the input field for dates that has the readonly attribute turned on so that users cannot change the date after selecting.
        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`; //setting the input type to 'text' and this is where the users can enter whatever they want in the text box that forms part of the todo's. 
        edit.innerHTML = "Edit"; //create the buttons 'edit' and 'delete' that will work as such.
        deleteButton.innerHTML = "Delete";

        label.appendChild(input); //the code creates a new label element and assigns it to the variable 'label'.
        label.appendChild(span); //the code then appends the span element to the label.
        actions.appendChild(edit); //the code then assigns the edit action to the label.
        actions.appendChild(deleteButton); //the code then assigns the deleteButton action to the label.
        todoItem.appendChild(label); //the code then appends the label to the todoItem variable.
        todoItem.appendChild(content); //the code then appends the content to the todoItem variable.
        todoItem.appendChild(date); //the code then appends the date to the todoItem variable.
        todoItem.appendChild(actions); //the code then appends the actions to the todoItem variable.

        todoList.appendChild(todoItem); //the code then appends the todoItem to the todoList variable.

        if (todo.done) { //if the 'done' property is set, adds the 'done' class to the todoItem
            todoItem.classList.add('done'); 
        }

        input.addEventListener('change', (e) => { //adds an event listener to the input field so that when it changes, the 'todo' list is updated.
            todo.done = e.target.checked; //sets the 'done' property of the todo list to the value of the checked box.
            localStorage.setItem('todos', JSON.stringify(todos)); //save the todo list to local storage.

            if(todo.done){  //if the 'done' property is set, adds the 'done' class to the todoItem, otherwise, removes it.
                todoItem.classList.add("done");
            } else {
                todoItem.classList.remove("done"); //otherwise, it removes it.
            }

            displayTaskElement() //calls the displayTaskElement() function to update the task list on the page.
        })

        edit.addEventListener('click', (e) => { //adds an event listener to the 'click' event of the input element.
            const input = content.querySelector('input'); 
            input.removeAttribute('readonly'); //removes the 'readonly' attribute from the input element.
            input.focus(); //sets the input element's focus.
            input.addEventListener('blur', (e) => { //adds an event listener to the 'blur' event of the input element. 
                input.setAttribute('readonly', true); //If the input element is blurred, sets the 'readonly' attribute to true.
                todo.content = e.target.value; //Sets the value of the input element to the content of the and.target element.
                localStorage.setItem('todos', JSON.stringify(todos)); //stores 'todos' in local storage.
                displayTaskElement() //calls the displayTaskElement() function.
            })
        })

        deleteButton.addEventListener('click', (e) => { //The code sets up an event listener for the 'click' event on the 'deleteButton' element.
            todos = todos.filter(t => t != todo); //The code filters the todos list to remove the current todo.
            localStorage.setItem('todos', JSON.stringify(todos)); //This stores the filtered todos list in localstorage.
            displayTaskElement() //displays the filtered todos.
        })
    })
}

function sortAlphabetically() {
    var list, i, switching, listitems, shouldSwitch; //the code staers by getting a referance to the list of to-dos in the DOM.
    list = document.getElementById('todo-list');
    switching = true; //a boolean variable is set to true, which will be used to control the loop.
    /* The code loops through the to-dos, checking each one to see if it should be swapped with the one after it, if it should be swopped,
    the code inserts the to-do after the on it is next to alphabetically, the boolean then ends with true again so the loop will continue executing 
    and putting the list in alphabetical order.*/
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





