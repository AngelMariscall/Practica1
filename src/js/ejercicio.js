/*//Pregunta al usuarios su edad y muestra en pantalla si ya puede votar o no considerando que le da para votar es de 18,
const edad = 15;
if (edad >= 18) {
    console.log("PUEDES VOTAR")
} else {
    console.log(`AUN NO PUEDES VOTAR`)
}
console.log(`TE FALTAN ${18 - edad} AÑOS PARA PODER VOTAR`)


//escribir un programa que almacene la contraseña en una variable, pregunte al usuario por la contraseña e imprima por
//pantalla si la contraseña introducida coincida
const contraseña = "Itvo123";
if (contraseña === "Itvo123") {
    console.log("INICIO DE SESION EXITOSO")
} else {
    console.log(`LAS CREDENCIALES NO COINCIDEN`)
}

//Escriba un programa que pida al usuario dos numeros y muestre por pantalla su division, validando que el numero 2 no sea 0
const num1 = 10;
const num2 = 2;
if (num2 !== 0) {

    console.log(`${num1} / ${num2} = ${num1 / num2}`);
} else {
    console.log("INGRESA UN NUMERO VALIDO");
}

//escribir un programa que pida al usuario un numero enteto y muestre por pantalla si es par o impar
const numero = 2;
if (numero % 2 === 0) {

    console.log(`el numero ${numero} es par`);
} else {
    console.log(`el numero ${numero} es impar`);
}

const numEnteros = [2, 35, 42, 1, 5, 26, 35, 15, 78];

array.forEach(element => {
    console.log(element % 2 === 0 ? `${element} =>  es par` : `${element} =>  es impar`);
});

//escribir codigo que reciba una palabra y la repita 10 veces
const palabra = "elsa pato";
for (let i = 0; i < 10; i++) {
    console.log(palabra);
}

//recibe su edad e imprime los años cumplidos
edad = 23;
for (let i = 0; i <= edad; i++) {
    if (i === 0) {
        console.log("BIENVENIDO AL PLANETA TIERRA")
    } else {
        console.log(`FELICIDADES HAS CUMPLIDO ${i}`);
    }
}

//PEDIR AL USUARIO ENTERO POSITIVO, MOSTRAR POR PANTALLA TODOS LOS MUMEROS IMPARES DESDE EL 1 HASTA ESE NUMERO
const numer = 18;
let serie = "";
for (let i = 0; i < numer; i++) {
    serie += i;
    if (i < (numer - 1)) {
        serie += ", ";
    }
}
console.log(serie);

//escribe una programa que imprima la tabla de multiplicar de un numero determinado
const tabla = 2;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} X ${i} = ${tabla * i}`);

}*/

//escribir un programa que pida a un usuario un palabra, y muestre la palabra letra por letra de manera inversa
const palabra = "buenas";
let tamaño = 0;
let espejo = "";
for (let i = 0; i < palabra.length; i++) {
    tamaño = i++;
}
console.log(tamaño);