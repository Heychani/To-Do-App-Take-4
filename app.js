// add -
// edit -
// delete -
// due dates
// alphabetically sorted
// strike through -
// JSON format

//verskillende variables wat ek wil gebruik in my JavaScript functions


class Task{
    constructor(input, date){
        this._task = input;
        this._date = date;
        this._completed = false;
    }
    get getDate() {
        return this._date;
    }
    get getTask () {
        return this._task;
    }

    set setTask(inputParam){
        this._task = inputParam;
    }    

    set setDate(inputParam){
        this._date = inputParam;
    }
    setCompleted(){
        this._completed = !this_._completed;
    }
}


let taskArray = [new Task("Cooking food", "2022/07/11"), new Task("Walk the dogs", "2022/07/12")];

var taskInput = document.getElementById("new-task");



function addTask(event){
    event.preventDefault()
    var taskInput = document.getElementById("new-task");
    var dateInput = document.getElementById("new-date");
    console.log(taskInput);

    var taskInputValue = taskInput.value;
    var dateInputValue = dateInput.value;

    console.log("Adding task...");

    taskArray.push(new Task(addTask, taskInputValue, dateInputValue));
    displayTaskElement();
}

var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");


function displayTaskElement(){
    console.log("taskArray.length");
    console.log(taskArray.length);
    for (let i = 0; i < taskArray.length; i++) {
        taskInput.value = "";

        var listItem = document.createElement("li"); 
        
        var checkBox = document.createElement("input"); 
        var label = document.createElement("label"); 
        var editInput = document.createElement("input"); 
        var editButton = document.createElement("button"); 
        var labelDate = document.createElement("input"); 

        checkBox.type = "checkBox";
        editInput.type = "text";

        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";

        label.classList.add("new-task"); 
        labelDate.classList.add("new-date");
        checkBox.classList.add("checkbox");
        editButton.classList.add("editClass");
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

function editTask(i) {
    console.log("Edit task...");

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





