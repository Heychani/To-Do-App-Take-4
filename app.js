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
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTaskHolder = document.getElementById("completed-tasks");

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
    incompleteTaskHolder.appendChild(listItem); //die add die nuwe item na die list
    bindTaskEvents(listItem, taskCompleted); //die reset die input

    taskInput.value = "";

};

//function om die task te edit
// edit_button.addEventListener("click", function(){
//     paragraph.contentEditable = true;
//     paragraph.style.backgroundColor = "#e9bd6b";
// });

//function vir wanneer tasks complete word, met die aktivering en ontwikkeling van die delete knoppie
// var completeTask = function(){
//     var listItem = this.parentNode;
//     var deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     deleteBtn.className = "delete";
//     listItem.appendChild(deleteBtn);
//die sal die checked items vat en dan weer remove van die lys
    // var checkBox = listItem.querySelector("input[type=checkbox]");
    // checkBox.remove();

    //waar die removed item in die completed list geinsert sal word
    // completeUl.appendChild(listItem);

    //sit alles by mekaar in die completed list
//     bindIncompleteItems(listItem, deleteTask);

// };

//'n function om die delete button te laat werk
// var deleteTask = function(){
//     console.log("Deleting task...");

//     var listItem = this.parentNode;
//     var ul = listItem.parentNode;

//     ul.removeChild(listItem);

// };

//maak nou 'n function wat alles in die onvolledige box bymekaar sit
// var bindIncompleteItems = function(taskItem, checkBoxClick){
//     console.log("Binding the incomplete list....");

//     var checkBox = taskItem.querySelector("input[type=checkbox]");

//     checkBox.onchange = checkBoxClick;

// };

//maak nou 'n function wat alles in die volledige box bymekaar sit
// var bindCompleteItems = function(taskItem, deleteButtonPress){
//     console.log("Binding completed tasks...");

    //sit die delete knoppie by
    // var deleteButton = taskItem.querySelector(".delete");
    //hier sê ek wat moet gebeur wanneer iemand op die knoppie druk
//     deleteButton.onclick = deleteButtonPress;

// };

// for(var i = 0; i < toDoUl.children.length; i++ ) {
//     bindIncompleteItems(toDoUl.children[i], completeTask);
// }

// for(var i = 0; i < completeUl.children.length; i++ ){
//     bindCompleteItems(completeUl.children[i], deleteTask);
// }

// addTaskBtn.addEventListener("click", addTask);




