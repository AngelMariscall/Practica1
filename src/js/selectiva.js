/*
const diaSemana = {
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6,
    domingo: 7
};

const diaActual = new Date().getDay();
if (diaActual === diaSemana.miercoles) {
    console.log("no te cases ni te embargues");
}
else {
    console.log("animo es una buena semana");
}
console.log("miercoles no te ....")


if (diaActual === diaSemana.jueves) {
    console.log("martes no te cases, ni te embargues");
} else if (diaActual === diaSemana.miercoles) {
    console.log("animo, es una buena semana");
} else {
    console.log("felicidades te mereces un buen descanso");
}



//realizar crear una calculadora basica


const num1 = 34;
const num2 = 14;
const operador = "%";

switch (operador) {
    case "+":
        let suma = num1 + num2;
        console.log(`${num1} + ${num2} = ${suma}`)
        break;

    case "-":
        let resta = num1 - num2;
        console.log(`${num1} - ${num2} = ${resta}`)
        break;

    case "*":
        let multi = num1 * num2;
        console.log(`${num1} * ${num2} = ${multi}`)
        break;

    case "/":
        let div = num1 / num2;
        console.log(`${num1} / ${num2} = ${div}`)
        break;

    case "%":
        let modulo = num1 % num2;
        console.log(`${num1} % ${num2} = ${modulo}`)
        break;

    default: console.log("Operador invalido/Elige un operador invalido")
        break;
}


//
let fruta = "";
switch (fruta) {
    case "mango":
    case "sandia":
    case "pera":
        console.log("es una fruta");
        break;
    case "chayote":
        console.log("es una verdura");
        break;
    default:
        console.log("desconocido")
        break;
}

const valor = 5;
switch (valor) {
    case 2:
        console.log("2");
        break;
    default:
        console.log("default");
    case 1:
        console.log("1");
}

//estructura selectiva de control repetitivas
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

const nombreFruta = ["mango", "piña", "melocoton", "durazno", "nanche"];

for (let i = 0; i < nombreFruta.length; i += 2) {
    console.log(nombreFruta[i])
}

n = 0;
for (let i = 0; i <= 10; i++) {
    n += i;
}
console.log(n);


//crear un scrip que permita crear un elemento dentro de un array
const nombreFruta = ["mango", "piña", "melocoton", "durazno", "nanche"];

for (let i = 0; i < nombreFruta.length; i++) {
    if (nombreFruta[i] === "piña") {
        console.log("Felicidades tu fruta ha sido encontrado")
        continue;
    }
    console.log(nombreFruta[i]);
}

n = 0;
for (let i = 2; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    n += i;
}
console.log(n)


const nombreFruta = ["mango", "piña", "melocoton", "durazno", "nanche"];
for (const fruta in nombreFruta) {
    if (Object.prototype.hasOwnProperty.call(nombreFruta, fruta)) {
        console.log(`${fruta} => ${nombreFruta[fruta]}`);

    }
}

for (const frutas of nombreFruta) {
    console.log(frutas);
}


const ciudades = {
    "MX": "MEXICO",
    "EU": "ESTADOS UNIDOS",
    "ES": "ESPAÑA",
    "JS": "JAPON",
    "CA": "CANADA"
};

for (const ciudad in ciudades) {
    if (Object.prototype.hasOwnProperty.call(ciudades, ciudad)) {
        console.log(`${ciudad} => ${ciudades[ciudad]}`);
    }
}

//no se puede ocupar for of, for each solo funciona con variables literables listas
*/

const nombreFruta = ["mango", "piña", "melocoton", "durazno", "nanche"];

const ciudades = {
    "MX": "MEXICO",
    "EU": "ESTADOS UNIDOS",
    "ES": "ESPAÑA",
    "JS": "JAPON",
    "CA": "CANADA"
};

let i = 0;
do {
    console.log(nombreFruta[i]);
    i++
} while (i < nombreFruta.length);