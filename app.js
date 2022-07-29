// add -
// edit -
// delete -
// due dates
// alphabetically sorted
// strike through -
// JSON format

//verskillende variables wat ek wil gebruik in my JavaScript functions

window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []; //to exchange the data to and from the server. When receiving data from the web the data will always be a string
    const taskInput = document.querySelector("new-task"); 
});

taskInput.addEventListener('submit', e => {
    e.preventDefault();

    const todos = {
        content: e.target.elements.content.value,
        category: e.target.elements.category.value,
        done: false,
        createdAt: new Date().getTime()
    }
    todos.push(todo);

})

function addTask(event){  //the addTask function adds a new task to the list of tasks that are due on a day. This is done by adding the new task's information to the array of tasks, the array is stored in "tasks".
    event.preventDefault() //user can not click outside of it
    var taskInput = document.getElementById("new-task"); 
    console.log(taskInput); //is for adding tasks to the list in the form of two text inputs, one for date and one for title. When clicking on either input, they are assigned values from variables dateInputValue and taskInputValue;

    var taskInputValue = taskInput.value; 

    var dateInputValue = dateInput.value;

    console.log("Adding task..."); 

    taskArray.push(new Task(addTask, taskInputValue, dateInputValue));
    displayTaskElement(); //The task gets pushed onto the back of the array
}

// class Task{ //class called task and it has two properties
//     constructor(input, date){ //the contructor function takes an INPUT variable and a DATE variable as parameters
//         this._task = input; //new object called task and it takes an input value
//         this._date = date; //value of the date to be a date argument
//         this._completed = false; //sets own completed property to false because it doesn't know if it would get completed or not
//     }
//     get getDate() { //method returns what is stored in this._date
//         return this._date;
//     }
//     get getTask () { //the contructor sets the value of this._ to be an input argument and sets the value of this._task to be a date argument
//         return this._task;
//     }

//     set getDate(inputParam){
//         this._date = inputParam;
//     }

//     set getTask(inputParam){ //addTask function assigns that value to the this_.task variable
//         this._task = inputParam;
//     }    

//     setCompleted(){ //check if its completed or not
//         this._completed = !this_._completed; 
//     }
// }



let taskArray = [new Task("Cooking food", "2022/07/11"), new Task("Walk the dogs", "2022/07/12")]; //array that will hold all the tasks in this program

var taskInput = document.getElementById("new-task"); //sets the value to "new-task"

//three functions has been created addTask(), editTask() and deleteTask()

function addTask(event){  //the addTask function adds a new task to the list of tasks that are due on a day. This is done by adding the new task's information to the array of tasks, the array is stored in "tasks".
    event.preventDefault() //user can not click outside of it
    var taskInput = document.getElementById("new-task"); 
    console.log(taskInput); //is for adding tasks to the list in the form of two text inputs, one for date and one for title. When clicking on either input, they are assigned values from variables dateInputValue and taskInputValue;

    var taskInputValue = taskInput.value; 

    var dateInputValue = dateInput.value;

    console.log("Adding task..."); 

    taskArray.push(new Task(addTask, taskInputValue, dateInputValue));
    displayTaskElement(); //The task gets pushed onto the back of the array
}

var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //Assigns incomplete tasks to incompleteTasksHolder
var completedTasksHolder = document.getElementById("completed-tasks"); //Assigns completed tasks to completedTasksHolder


function displayTaskElement(){ //create an empty dic that displays tasks on screen, which is stored at user's input for the text field that will be created on the page. The value of this variable is set to an empty string. 

    console.log("taskArray.length");
    console.log(taskArray.length);
    for (let i = 0; i < taskArray.length; i++) { //loop that goes through each item in the array and checks if it's been completed or not 
        taskInput.value = ""; 
      
        var listItem = document.createElement("li"); //variable, is used to create a new list item element on this page, this link displays the newly created list item.
        
        var checkBox = document.createElement("input"); //edit input is given the text 'addTask'. 
        var label = document.createElement("label"); //is given the text
        //three buttons are then created/ edit task, delete task and add task.
        var editInput = document.createElement("input"); 
        var editButton = document.createElement("button"); 
        var labelDate = document.createElement("input"); 

        checkBox.type = "checkBox"; 
        editInput.type = "text";

        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";

        label.classList.add("new-task"); //label is created first, with tasks and then set to innerText. To display the task name when clicked by the user
        labelDate.classList.add("new-date"); //text today's date and then set to innerText. 
        checkBox.classList.add("checkbox"); //will be used later on in the code when adding tasks
        editButton.classList.add("editClass"); //will allow the users to enter in any changes they would like to make
        deleteButton.classList.add("deleteClass");

        console.log("HIERRRRR");
        console.log(taskArray[i]);
        console.log(i);
        console.log(taskArray[i].getDate); 
        label.innerText = taskArray[i].getTask;
        labelDate.innerText = taskArray[i].getDate;

        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        listItem.appendChild(labelDate);

        incompleteTasksHolder.appendChild(listItem);
//this is used to create an eventlistener for the click event of each element in the 'editClss" class. The first line of code defines a variable called i that will be used as the index number for each element in the "editClass" class.
        let theEdits = document.getElementsByClassName("editClass");
        console.log("theEdits");
        console.log(theEdits);
        let theDeletes = document.getElementsByClassName("deleteClass");
        theEdits[i].onclick = function() {
            editTask(i);
        }
        theDeletes[i].onclick = function() {
            deleteTask(i);
        } 
    }
    
}
//the edit finction edits one of the existing tasks' from today's list into another one from tomorrow's list. It does so by finding out what index number corresponds to today's date (in other words, what index number is equal to 1) then using that index number as wekk as its corresponding value (_.task) from yesterday's list and setting them both equal to each other(so that they are both set up at 0). Then it prints out 'edit completed!' - because the editing was successful. 
function editTask(i) { 
    console.log("Edit task...");
//These lines below are added to the document's list of elements, respectively. These are then added to document's list of elements with their repective classes using getElementByClassName. 
    let theTasks = document.getElementsByClassName("new-task");
    let theDates = document.getElementsByClassName("new-date");
    let theBoxes = document.getElementsByClassName("checkbox");

    console.log("theTasks is: ");
    console.log(theTasks);
    console.log("theDates is: ");
    console.log(theDates);
    console.log("theBoxes is: ");
    console.log(theBoxes);

    console.log("i is: ");
    console.log(i);

    console.log("theTasks[" + i + "] is: ");
}

function deleteTask() {
    console.log("Deleting task....");

    let theTasks = document.getElementsByClassName("new-task");
    let theDates = document.getElementsByClassName("new-date");
    let theBoxes = document.getElementsByClassName("checkbox");

    console.log("theTasks is: ");
    console.log(theTasks);
    console.log("theDates is: ");
    console.log(theDates);
    console.log("theBoxes is: ");
    console.log(theBoxes);

    console.log("i is: ");
    console.log(i);

    console.log("theTasks[" + i + "] is: ");
    console.log(theTasks[i]);
}
 
function taskCompleted() {
    console.log("Task complete.....");
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

function taskIncomplete() {
    console.log("Task incomplete....");
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}





