// add -
// edit -
// delete -
// due dates
// alphabetically sorted
// strike through -
// JSON format

//verskillende variables wat ek wil gebruik in my JavaScript functions

class Task{
    constructor(input, date){ //constructor is 'n metode om die maak en initializing van objects te create binne in 'n klas
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
} //hier is die class Task created en die verskillende constructors wat binne in die new-task sal included word.

let taskArray = [new Task("Cooking food", "2022/07/11"), new Task("Walk the dogs", "2022/07/12")]; //new task kom vanaf die class task wat bo by mekaar gesit.

var taskInput = document.getElementById("new-task"); //hierdie laat die taskInput die "new-task" in vat.

function addTask(event) { //hierdie is die function wat created is om die tasks te add en bymekaar te sit.
    event.preventDefault() //die prevent die form om van vooraf te submit.
    var taskInput = document.getElementById("new-task"); //'n variable wat die task input in vat.
    var dateInput = document.getElementById("new-date"); //'n variable wat die date input in vat.
    console.log(taskInput);

    var taskInputValue = taskInput.value; //hierdie variable vat die task input se value en save dit onder taskInputValue
    var dateInputValue = dateInput.value; //hierdie variable vat die date input se value en save dit onder taskInputValue

    console.log("Adding task...");

    taskArray.push(new Task(addTask, taskInputValue, dateInputValue));
    displayTaskElement(); //.push adds items to an end of a array
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
        taskInput.value = "";

        var listItem = document.createElement("li"); //create list item
        
        var checkBox = document.createElement("input"); //this takes the input from the checkbox
        var label = document.createElement("label"); //die label
        var editInput = document.createElement("input"); //text input edit
        var editButton = document.createElement("button"); //edit button
        var deleteButton = document.createElement("button"); //delete button
        var labelDate = document.createElement("input"); //this is the date label so that it shows

        checkBox.type = "checkBox"; 
        editInput.type = "text";

        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";

        label.classList.add("new-task"); //this entire section adds the different components into the list, this is where the modification takes place and the information is taken in by the program
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

    /*var listItem = theTasks[i].parentNode;

    var editInput = document.createElement("input");
    var label = theTasks[i];
    var containsClass = listItem.classList.contains("editMode");
    if (containsClass) { //if the class of the parent is .editMode switch to take an input
        label.innerText = editInput.value;
    }else {
        editInput.value = label.innerText;//input changes
    }
    listItem.classList.toggle("editMode");
    }*/
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
 
// function bindTaskEvents(taskListItem, checkBoxEventHandler) {
//     console.log("Binding items....");
//     var checkBox = taskListItem.querySelector("input[type=checkbox]");
//     var editButton = taskListItem.querySelector("button.edit");
//     var deleteButton = taskListItem.querySelector("button.delete");

//     editButton.onclick = editTask;
//     deleteButton.onclick = deleteTask;
//     checkBox.onchange = checkBoxEventHandler;
// }

//addButton.addEventListener("click", addTask);
//laat alles weer oor en oor gebeur
// for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
//     bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
// }

// for (var i = 0; i < completedTasksHolder.children.length; i++) {
//     bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
// }



