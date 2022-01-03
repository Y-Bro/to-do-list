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
        //append the li element to the ul element
        taskList.appendChild(element);

        inputTask.value = "";
        
    }else{
        if(taskArr.includes(task))
        {
            alert("Task Already Exists");
        }
        else{
            alert("Invalid Task")
        }
    }

}

addButton.addEventListener("click", addNewTask);

