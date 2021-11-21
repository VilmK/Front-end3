let kaireje = document.querySelector(".btn1");
kaireje.addEventListener("click", function () {
    let container = document.querySelector(".container");
    container.classList.add("d-flex", "flex-row");
    let img = document.querySelector(".item1");
    img.classList.add("d-flex justify-content-start");
})

let desineje = document.querySelector(".btn2");
desineje.addEventListener("click", function () {
    let container = document.querySelector(".container");
    container.classList.add("d-flex", "flex-row-reverse");
    let img = document.querySelector(".item1");
    img.classList.add("d-flex justify-content-end");
})

let paslepti = document.querySelector(".btn3");
paslepti.addEventListener("click", function () {
    let img = document.querySelector("img");
    img.classList.add("d-none");
})

let nukelti = document.querySelector(".btn4");
nukelti.addEventListener("click", function () {
    let container = document.querySelector(".container");
    container.classList.add("d-flex", "flex-column-reverse");
    let img = document.querySelector(".item1");
    img.classList.add("d-flex align-items-end");
})

let atstatyti = document.querySelector(".btn5");
atstatyti.addEventListener("click", function () {
    let container = document.querySelector(".container");
    container.classList.remove("d-flex");
    let img = document.querySelector(".item1");
    img.classList.remove("d-none");
})

