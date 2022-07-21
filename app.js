// add -
// edit -
// delete -
// due dates
// alphabetically sorted
// strike through -
// JSON format

//verskillende variables wat ek wil gebruik in my JavaScript functions

class Task {
    constructor(input, date) {
        this._task = input;
        this._date = date;
        this._completed = false;
    }
    get getDate() {
        return this._date;
    }
    get getTask() {
        return this._task
    }

    set setTask(inputParam) {
        this._task = inputParam;
    }

    set setDate(inputParam) {
        this._date = inputParam;
    }
    setCompleted() {
        this._completed = !this_._completed
    }
}

let taskArray = [new Task("Cooking food", "2022/07/15"), new Task("Walk Dogs", "2022/07/12")];
var taskInput = document.getElementById("new-task");

function addTask(event) {
    event.preventDefault()
    var taskInput = document.getElementById("new-task");
    var dateInput = document.getElementById("new-date");

    var taskInputValue = taskInput.value;
    var dateInputValue = dateInput.value;

    console.log("Adding task...");

    taskArray.push(new Task(taskInputValue, dateInputValue));
    displayTaskElement();
}

// var taskInput = document.getElementById("new-task"); //nuwe task
//var addButton = document.getElementsByTagName("button")[0]; //eerste button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

//var createNewTaskElement = function(taskString) { //new task list item

function displayTaskElement() {
    console.log("taskArray.length");
    console.log(taskArray.length);
    for (let i = 0; i < taskArray.length; i++) {
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

        //elke element moet geappend word om by sy nuwe plek uit te kom
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        listItem.appendChild(labelDate);

        incompleteTasksHolder.appendChild(listItem);
        //add die nuwe item aan die list

        let theEdits = document.getElementsByClassName("editClass");
        console.log("theEdits");
        console.log(theEdits);
        let theDeletes = document.getElementsByClassName("deleteClass");
        theEdits[i].onclick = function () {
            editTask(i);
        }
        /*theDeletes[i].onclick = function () {
            deleteTask(i);
        }*/
    }
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
function editTask(i) {


    console.log("Edit task...");

    let theTasks = document.getElementsByClassName("new-task");
    let theDates = document.getElementsByClassName("new-date");
    let theBoxes = document.getElementsByClassName("checkbox");

    console.log("theTasks is:");
    console.log(theTasks);
    console.log("theDates is:");
    console.log(theDates);
    console.log("theBoxes is:");
    console.log(theBoxes);

    console.log("i is:");
    console.log(i);

    console.log("theTasks[" + i + "] is:");
    console.log(theTasks[i]);

    /* var listItem = theTasks[i].parentNode;
 
     var editInput = document.createElement("input");
     var label = theTasks[i];
     var containsClass = listItem.classList.contains("editMode");
     if (containsClass) { //if the class of the parent is .editMode switch to take an input
         label.innerText = editInput.value;
     } else {
         editInput.value = label.innerText;//input changes
     }
     listItem.classList.toggle("editMode");*/
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

//addButton.addEventListener("click", addTask);
//laat alles weer oor en oor gebeur



