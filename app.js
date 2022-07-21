// add
// edit
// delete
// due dates
// alphabetically sorted
// strike through
// JSON format

//verskillende variables wat ek wil gebruik in my JavaScript functions
var taskInput = document.getElementById("new-task"); //nuwe task
var addButton = document.getElementsByTagName("button")[0]; //eerste button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString) { //new task list item

    var listItem = document.createElement("li"); //create list item

    var checkBox = document.createElement("input"); //input van die checkbox
    var label = document.createElement("label"); //die label
    var editInput = document.createElement("input"); //text input edit
    var editButton = document.createElement("edit"); //edit button
    var deleteButton = document.createElement("delete"); //delete button

    //elke element moet gemodify word na iets anders wanneer dit na sy completed lys toe gaan
    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;

    //elke element moet geappend word om by sy nuwe plek uit te kom
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;

}

//'n function wat ek create het om 'n nuwe task te vat en in die incomplete list te sit
var addTask = function() {
    console.log("Adding task...");
    var listItem = createNewTaskElement(taskInput.value); // hier store hy die nuwe input in 'n variable
    incompleteTasksHolder.appendChild(listItem); //die add die nuwe item na die list
    bindTaskEvents(listItem, taskCompleted); //die reset die input

    taskInput.value = "";

}

//function om die task te edit wat klaar bestaan
var editTask = function() {
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

var deleteTask = function() {
    console.log("Deleting task....");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem); //removes the chosen ToDo from the list
}
 
var taskCompleted = function() {
    console.log("Task complete.....");
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
    console.log("Task incomplete....");
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}
 
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Binding items....");
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
};

addButton.addEventListener("click", addTask);
//laat alles weer oor en oor gebeur
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
};

for (var i = 0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}



