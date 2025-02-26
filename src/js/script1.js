// comentario de una sola linea
/*
    este es un comentario de bloque
*/

/** 
 * este es un comentario de docuemtacion
 */

//asignacion de variables
let numero = 56;

//expresion aritmetica
let multiplicacion = 5 * 32;

//expresion algebraica
let x;
let expresion = 5(x) - 3(x) + 1;

//llamar una funcion
sumar();
calcularpromedio();

//estructura de una funcion sin valor de retorno
function sumar(x, y) {

}

//estructura de una funcion sin valor de retorno
function getPromedio() {
    return promedio, x, y;
}

function name(params) {
    return "Buenas";
}
//estructuras de control (if)
//simple
if (condicion) {

}

//doble
if (condicion) {

} else {

}

//multiple 1
if (condition) {
    if (condition) {

    } else {

    }
}

// multiple 2
if (condition) {

}
else if (condition) {

}
else if (condition) {

}

//blucles
for (let i = 0; i <= 10; i++) {

}

//estructura de una clase
class miclase {
    nombre = "angel";
    edad = "22";
    constructor(apellidoP, apellidoM) {
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.gender = "F";
    }
}

//manipulacion de objetos y propiedades
persona.numControl = "19920174";


// creacion de objeto forma comun y sencilla
const objVeiculo = {
    color: "rojo",
    modelo: "versa",
    marca: "nissan",
    km: 345,

    mostrardatos: function () {
        console.log("yo muestro los datos");
    }
};

objVeiculo.mostrardatos();
console.log(objVeiculo.modelo)

//creacion de objeto usando un constructor new object()
const electronico = new Object();
electronico.marca = "iphone";
electronico.modelo = "7789";
electronico.ram = 12;
electronico.dd = 256;

electronico.getmodelo = function () {
    console.log("el modelo del celular es: " + getmodelo);
}

console.log(electronico);
electronico.getmodelo();

console.log(electronico.marca);

//creacion de objeto usando una clase ES6
class proyecto {
    constructor(nombre, duracion, responsable, costo, tipoproyecto) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.responsable = responsable;
        this.costo = costo;
        this.tipoproyecto = tipoproyecto;
    }

    getnombreproyecto() {
        //return this.nombre; devolver solo el dato
        return `El nombre del proyecto es ${this.nombre}`;
    }
}

const proyecto1 = new proyecto();
console.log(proyecto1);
const proyecto2 = new proyecto("vivienda", 8, "keyla");
console.log(proyecto2);

console.log(proyecto2.getnombreproyecto());
//
//let x = 45;
//let y = 23;

//las variales llevan ;
function mifuncion() {
    let z = 34;
}

//no llevan ; las estructuras de control
if (true) {

}

//cuando son objetos terminan en ;
const miobjeto = {};

//Nomenglatura camel Case: umper camel case

let genero;
let nuemroTelefono;
//Pascal Case
let NumeroDeTelefono //etiquetado para clases

// Snake_case
let numero_de_telefono;

//constante
const MAYUSCULA = "BUENAS"; //se tiene que asignar un valor

/* variables: su valor cambia durante la ejecucion del programa, tiene un identificador su estructura es el identificador,
tipo de dato, valor(contenido)

ejemplo:
let x = 45; //asignacion de un valor
console.log(x);

x = "ingenieria en TIC"; //reasignacion de otro valor
console.log(x);


formas de declarar una variable en js
//forma 1
var color = "Azul";
console.log(color);

//forma 2
let numControl = 19920174;
console.log(numControl)

//forma 3
const cumpleanio = "31/08/01";
.*/