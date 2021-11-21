

// function maziausioSkaiciausRadimas(sk1, sk2, sk3) {
//     let ats = Math.min(sk1, sk2, sk3);
//     return ats;
// }
// let skaicius1 = +prompt("Įveskite skaičių");
// let skaicius2 = +prompt("Įveskite skaičių");
// let skaicius3 = +prompt("Įveskite skaičių");
// console.log(maziausioSkaiciausRadimas(skaicius1, skaicius2, skaicius3));



// function vidurkioRadimas(sk1, sk2, sk3) {
//     let ats = ((sk1 + sk2 + sk3) / 3);
//     return ats;
// }
// let skaicius1 = +prompt("Įveskite 1 skaičių");
// let skaicius2 = +prompt("Įveskite 2 skaičių");
// let skaicius3 = +prompt("Įveskite 3 skaičių");
// console.log(vidurkioRadimas(skaicius1, skaicius2, skaicius3));


// //3 uždavinys
// function skaitmenuSuma(sk1, sk2) {
//     let ats = (sk1 + sk2);
//     return ats;
// }
// let skaitmuo1 = +prompt("Įveskite 1 dviženklio skaičiaus skaitmenį");
// let skaitmuo2 = +prompt("Įveskite 2 dviženklio skaičiaus skaitmenį");

// console.log(skaitmenuSuma(skaitmuo1, skaitmuo2));


// function skaitmenuSuma(sk) {
//     let suma = 0;
//     while (sk > 0) {
//         suma = suma + sk % 10;
//         sk = Math.floor(sk / 10);

//     }
//     return suma;
// }
// let skaicius = +prompt("Įveskite skaičių");
// console.log(skaitmenuSuma(skaicius));

//6uždavinys
// function printText() {
//     console.log("In the beginning there were the swamp, the hoe and JavaScript.");
// }
// printText();
// printText();
// printText();

//7uždavinys

// function printText() {
//     console.log("In the beginning there were the swamp, the hoe and JavaScript.");
// }

// let kartai = +prompt("Įveskite, kiek kartų tekstas turi būti atspausdintas");
// for (sk = 1; sk <= kartai; sk++) {
//     printText();
// }


// // // //8uždavinys

// function printStars() {
//     let star = "";
//     for (let sk = 0; sk < starNumber; sk++) {
//         star = star + "*";
//     }
//     console.log(star);
// }
// let starNumber = +prompt("Įveskite, kiek žvaigždučių turi būti atspausdinta");
// printStars();




// /// 8.2 uzdavinys

// let starNumber = +prompt("Įveskite, kiek žvaigždučių turi būti atspausdinta");
// function printStars() {
//     let star = "";
//     for (let sk = 0; sk < starNumber; sk++) {
//         star = star + "*";
//     }
//     console.log(star);
// }

// for (let y = 0; y < starNumber; y++) {
//     printStars()
// }

// //8.3 uzdavinys

// let starHeight = +prompt("Įveskite, kiek žvaigždučių turi būti atspausdinta - aukštis");
// let starWidth = +prompt("Įveskite, kiek žvaigždučių turi būti atspausdinta - plotis");


// function printStars() {
//     let star = "";
//     for (let sk = 0; sk < starWidth; sk++) {
//         star = star + "*";
//     }
//     console.log(star);
// }
// for (let y = 0; y < starHeight; y++) {
//     printStars()
// }


//8.4. uzdavinys

let maxStar = +prompt("Įveskite, kiek žvaigždučių turi būti atspausdinta trikampio apačioje");
let star = "";
for (let i = 1; i <= maxStar; i++) {
    for (let j = 0; j < i; j++) {
        star = star + "*";
    }
    star = star + "\n";
}
console.log(star);


