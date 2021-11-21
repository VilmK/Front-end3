let kmi = document.querySelector("#kmi");

let forma = document.querySelector("#form1");
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let ugis = +e.target.elements.height.value;
    let svoris = +e.target.elements.weight.value;
    if (ugis <= 0 || svoris <= 0) {
        console.log("Neteisingai įvesti duomenys");
        kmi.textContent = "Neteisingai įvesti duomenys";
    }
    else {
        let kmiAts = (svoris) / ((ugis / 100) * (ugis / 100));
        console.log("Jūsų KMI yra " + kmiAts);
        kmi.textContent = "Jūsų KMI yra " + kmiAts;
    }
})




