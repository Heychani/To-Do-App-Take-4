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
        return this._task
    }

    set setTask(inputParam){
        this._task = inputParam;
    }    

    set setDate(inputParam){
        this._date = inputParam;
    }
    setCompleted(){
        this._completed = !this_._completed
    }
}

let taskArray = [];
var taskInput = document.getElementById("new-task");

function addTask(event){
    event.preventDefault()
    var taskInput = document.getElementById("new-task");
    var dateInput = document.getElementById("new-date");
    console.log(taskInput);

    var taskInputValue = taskInput.value;
    var dateInputValue = dateInput.value;
    console.log(taskInputValue);

    console.log("Adding task...");
    console.log(dateInputValue);

    taskArray.push(new Task(addTask, taskInputValue, dateInputValue));
    displayTaskElement();
}

// var taskInput = document.getElementById("new-task"); //nuwe task
//var addButton = document.getElementsByTagName("button")[0]; //eerste button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

//var createNewTaskElement = function(taskString) { //new task list item

function displayTaskElement(){

    for (let i = 0; i < taskArray.length; i++){
        //bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";

    var listItem = document.createElement("li"); //create list item

    var checkBox = document.createElement("input"); //input van die checkbox
    var label = document.createElement("label"); //die label
    var editInput = document.createElement("input"); //text input edit
    var editButton = document.createElement("button"); //edit button
    var deleteButton = document.createElement("button"); //delete button
    var labelDate = document.createElement("label");

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    console.log("HIERRRRR");
    console.log(taskArray[i]);
    console.log(i);
    label.innerText = taskArray[i].getDate;

    editButton.onclick = editTask();
    deleteButton.onclick = deleteTask();
    checkBox.onchange = checkBoxEventHandler;

    // label.innerText = taskString;

    //elke element moet geappend word om by sy nuwe plek uit te kom
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    listItem.appendChild(labelDate);
    }
    incompleteTasksHolder.appendChild(listItem);
 //add die nuwe item aan die list
}

//'n function wat ek create het om 'n nuwe task te vat en in die incomplete list te sit
// var addTask = function() {
//     console.log("Adding task...");
//     var listItem = createNewTaskElement(taskInput.value); // hier store hy die nuwe input in 'n variable
//     incompleteTasksHolder.appendChild(listItem); //die add die nuwe item na die list
//     bindTaskEvents(listItem, taskCompleted); //die reset die input

//     taskInput.value = "";

// }

//function om die task te edit wat klaar bestaan
function editTask() {
    console.log("Edit task...");

    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");
    if (containsClass) { //if the class of the parent is .editMode switch to take an input
        label.innerText = editInput.value;
    }else {
        editInput.value = label.innerText;//input changes
    }
    listItem.classList.toggle("editMode");
    }

function deleteTask() {
    console.log("Deleting task....");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem); //removes the chosen ToDo from the list
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
 
function bindTaskEvents(taskListItem, checkBoxEventHandler) {
    console.log("Binding items....");
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
}

//addButton.addEventListener("click", addTask);
//laat alles weer oor en oor gebeur
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}



