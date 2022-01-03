let taskList = document.getElementById("taskList");
let addButton = document.getElementById("addButton");
let inputTask = document.getElementById("inputTask");
let delModal = document.getElementsByClassName("modal")[0];
let delButton = document.getElementById("confirmRemove");
let finishButton = document.getElementById("confirmDone");
let completeModal = document.getElementsByClassName("modal")[1];
let nodeObj = {};
let taskArr = [];
let val = "";
var completedTask;

function addNewTask() {
    //grab text value from input field
    let task = inputTask.value;

    if (task.length > 0 && !taskArr.includes(task)) {

        taskArr.push(task);
        //create li element to append to ul element in the div
        let element = document.createElement("li");
        element.className = "list-group-item";
        //create text element and append it to li element
        let textNode = document.createTextNode(task);
        element.appendChild(textNode);

        //creating delete icon
        let icon = document.createElement("i");
        icon.classList.add("fa");
        icon.classList.add("fa-trash");
        icon.style.float = "right";
        icon.addEventListener("click", (event) => {
            deleteTask(event);
        });
        element.appendChild(icon);

        //creating completed icon
        let doneIcon = document.createElement("i");
        doneIcon.classList.add("fa");
        doneIcon.classList.add("fa-check-square");
        doneIcon.style.float = "right";
        doneIcon.style.paddingRight = "10px";
        doneIcon.addEventListener("click", (event) => {
            finishTask(event);
        })
        element.appendChild(doneIcon);


        //append the li element to the ul element
        taskList.appendChild(element);

        inputTask.value = "";

    } else {
        if (taskArr.includes(task)) {
            alert("Task Already Exists");
        }
        else {
            alert("Invalid Task")
        }
    }

}

//function to add task via enter key
function check(event) {
    if (event.key == "Enter") {
        addNewTask();
    }
}

addButton.addEventListener("click", addNewTask);

//flow to delete task
function deleteTask(event) {


    delModal.style.display = "block";
    let curNode = event.target.parentNode;
    let curText = curNode.textContent;
    nodeObj.curNode = curNode;
    nodeObj.text = curText;


    delButton.addEventListener("click", () => {
        confirmDelete(nodeObj);
    })

}

function confirmDelete(obj) {
    let index = taskArr.indexOf(obj.text);
    if (index > -1) {
        taskArr.splice(index, 1);
        obj.curNode.remove();
    }

    delModal.style.display = "none";
    nodeObj = {};
}

//complete task flow starts here
function finishTask(event) {

    completedTask = event.target.parentNode;

    if (completedTask.style.backgroundColor != "cyan") {
        completeModal.style.display = "block";
    } else {
        completedTask.style.textDecoration = "none";
        completedTask.style.backgroundColor = "white";
    }


}

function confirmComplete() {
    completedTask.style.textDecoration = "line-through";
    completedTask.style.backgroundColor = "cyan";
    completeModal.style.display = "none";
}
//complete task flow ends here



function cancelRemove() {
    delModal.style.display = 'none';
    completeModal.style.display = "none";
}

