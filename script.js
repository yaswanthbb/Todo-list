let buttoN = document.getElementById("addButton");


let todolist = [
    {
        text:"Learn HTML",
        uniqueid : 1
    },
    
    {
        text : "Learn CSS",
        uniqueid : 2
    },
    
    {
        text : "Learn JavaScript",
        uniqueid : 3
    },
    
    {
        text : "Learn React JS",
        uniqueid : 4
    }
    ]

let todoCount = todolist.length;

function checkBoxChecked(labelId){
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("label-crossing")

}

function todoItem(todolist){ 
    let checkBoxId =  "checkBox" + todolist.uniqueid;
    let labelId = "label"+todolist.uniqueid;
    let todoId = "todo"+todolist.uniqueid;


    let todoElement = document.createElement("li");
    todoElement.id = todoId
    todoElement.classList.add("d-flex","flex-row","mt-3");
    todoItemsContainer.appendChild(todoElement);


    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.classList.add("input-checkbox")
    inputElement.id = checkBoxId;


    inputElement.onclick = function (){
        checkBoxChecked(labelId);
    }

    todoElement.appendChild(inputElement)

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("task-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer)


    let labelElement = document.createElement("label");
    labelElement.setAttribute("for",checkBoxId);
    labelElement.id = labelId
    labelElement.classList.add("input-label")
    labelElement.textContent=todolist.text;
    labelContainer.appendChild(labelElement);


    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);


    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);

    
    deleteIcon.onclick = function(){
        deleteIcononClick(todoId)
    }
}


for(let eachitem of todolist){
    todoItem(eachitem)
}


function addingListElements(){
    
    let inputUser = document.getElementById("user-input").value;
    todoCount = todoCount+1

    let newTodo = {
    text : inputUser,
    uniqueid : todoCount,
    }
    todoItem(newTodo)
    document.getElementById("user-input").value = "";
}

buttoN.onclick = function(){
    addingListElements()
}


function deleteIcononClick(todoId){
    let todoDeleteElement = document.getElementById(todoId)
    todoItemsContainer.removeChild(todoDeleteElement)
}
