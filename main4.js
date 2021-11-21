let forma = document.querySelector("#todolist");


forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let li = document.createElement("li");
    let ul = document.querySelector("#list");
    let todoListItem = e.target.elements.task.value;
    console.log(todoListItem);
    li.textContent = todoListItem;
    ul.appendChild(li);
})
