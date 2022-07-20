//verskillende variables wat ek wil gebruik in my JavaScript functions
var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');
var toDoUl = document.querySelector('.todo-list ul');
var completeUl = document.querySelector('.complete-list ul');


//all die functions wat ek wil create 
var createNewTask = function(task){
    console.log("Creating task...");

    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");

    label.innerText = task;

    checkBox.type = "checkbox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;

};
//'n function wat ek create het om 'n nuwe task te vat en in die incomplete list te sit
var addTask = function(){
    console.log("Adding task...");
    var listItem = createNewTask(newTask.value); // hier store hy die nuwe input in 'n variable
    toDoUl.appendChild(listItem); //die add die nuwe item na die list
    newTask.value=""; //die reset die input

    bindIncompleteItems(listItem, completeTask);

};

//function om die task te edit
// edit_button.addEventListener("click", function(){
//     paragraph.contentEditable = true;
//     paragraph.style.backgroundColor = "#e9bd6b";
// })

// };

//function vir wanneer tasks complete word, met die aktivering en ontwikkeling van die delete knoppie
var completeTask = function(){
    var listItem = this.parentNode;
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);
//die sa; die checked items vat en dan weer remove van die lys
    var checkBox = listItem.querySelector("input[type=checkbox]");
    checkBox.remove();

    //waar die removed item in die completed list geinsert sal word
    completeUl.appendChild(listItem);

    //sit alles by mekaar in die completed list
    bindIncompleteItems(listItem, deleteTask);

};

//'n function om die delete button te laat werk
var deleteTask = function(){
    console.log("Deleting task...");

    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);

};

//maak nou 'n function wat alles in die onvolledige box bymekaar sit
var bindIncompleteItems = function(taskItem, checkBoxClick){
    console.log("Binding the incomplete list....");

    var checkBox = taskItem.querySelector("input[type=checkbox]");

    checkBox.onchange = checkBoxClick;

};

//maak nou 'n function wat alles in die volledige box bymekaar sit
var bindCompleteItems = function(taskItem, deleteButtonPress){
    console.log("Binding completed tasks...");

    //sit die delete knoppie by
    var deleteButton = taskItem.querySelector(".delete");
    //hier sê ek wat moet gebeur wanneer iemand op die knoppie druk
    deleteButton.onclick = deleteButtonPress;

};

for(var i = 0; i < toDoUl.children.length; i++ ) {
    bindIncompleteItems(toDoUl.children[i], completeTask);
}

for(var i = 0; i < completeUl.children.length; i++ ){
    bindCompleteItems(completeUl.children[i], deleteTask);
}

addTaskBtn.addEventListener("click", addTask);



