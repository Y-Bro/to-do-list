let taskList = document.getElementById("taskList");
let addButton = document.getElementById("addButton");
let inputTask = document.getElementById("inputTask");
let taskArr = [];
let val = "";

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
        icon.addEventListener("click",(event)=>{
            deleteTask(event);
        });
        element.appendChild(icon);

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

addButton.addEventListener("click", addNewTask);


function deleteTask(event){
    let curNode = event.target.parentNode;
    let curText = curNode.textContent;
    curNode.remove();
    let index = taskArr.indexOf(curText);
    if(index > -1)
    {
        taskArr.splice(index,1);
    }
    console.log(taskArr);
}

