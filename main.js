let random_num = Math.floor(Math.random() * 11);
console.log(random_num);

let rezultatas = document.querySelector("#resultText");
let spejimuKiekis = document.querySelector("#resultCount");

let count = 0;
let forma = document.querySelector("form");
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let ivestasSkaicius = e.target.elements.input.value;

    if (ivestasSkaicius == random_num) {
        console.log("Atspėjote skaičių");
        rezultatas.textContent = "Atspėjote skaičių";
    }
    else if (ivestasSkaicius > random_num) {
        console.log("Spėtas skaičius didesnis");
        rezultatas.textContent = "Spėtas skaičius didesnis";
    }
    else if (ivestasSkaicius < random_num) {
        console.log("Spėtas skaičius mažesnis");
        rezultatas.textContent = "Spėtas skaičius mažesnis";
    }
    count++;
    console.log("Spėta" + count + "kartų");
    spejimuKiekis.textContent = "Spėta " + count + " kartų";

})

