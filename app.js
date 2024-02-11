let btn = document.querySelector("#add");
let todo_container = document.querySelector(".todo-container");
// let todo = document.querySelector(".todo");
let inp = document.querySelector("input");
btn.addEventListener("click", function() {
    let item = document.createElement("li");
    if(inp.value!=""){
        item.innerText = inp.value;
        let delBtn = document.createElement("button");
        let todo = document.createElement("div");
        todo.classList.add("todo");
        delBtn.innerText = "delete";
        delBtn.classList.add("delete");
        todo_container.appendChild(todo);
        todo_container.appendChild.br;
        todo.appendChild(item);
        todo.appendChild(delBtn);
        // item.appendChild.br;
        // todo.classList.add();
        delBtn.classList.add("delete");
        item.classList.add("todo-item");
        inp.value = "";
        // console.log(inp.value);
    }else{
        
    }
    
});
todo_container.addEventListener("click", function (event){
    // console.log("button clicked");
    // console.log(event.target.nodeName); //this will tell uexactly which btton is clicked
    if (event.target.nodeName == "BUTTON") {
        // console.log("delete")
        let ListItem = event.target.parentElement;
        console.log(ListItem);
        ListItem.remove();
    }
});