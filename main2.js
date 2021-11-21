
let forma = document.querySelector("#form1");
let suma = document.querySelector("#sum");
console.log(forma);
console.log(suma);


forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let firstNr = +e.target.elements.firstNumber.value;
    let secondNr = +e.target.elements.secondNumber.value;
    suma.textContent = firstNr + secondNr;
})

