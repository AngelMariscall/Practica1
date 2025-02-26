//operadores aritmeticos
//suma, resta, divicion, modulo, potencia
let a = 45, b = 3;
suma = a + b;
console.log(suma);

let c = 45, d = 3;
resta = a - b;
console.log(resta);

let e = 0, f = 0;
division = e / f;
console.log(division);
console.log(Math.round(division));
console.log(division.toFixed(2));


//modulo
let g = 10, h = 4;
modulo = g % h;
console.log(modulo);

//potencia
let i = 2;
console.log(i ** 3)
console.log(Math.pow(i, 3));

//incremento
let j = 10;
console.log(++j);
console.log(j++);
console.log(j);

//incremento
let k = 10;
console.log(--k);
console.log(k--);
console.log(k);

//asignacion
let l = 10, m = 4
let n = l + m;
console.log(n);

let o = 10, p = 4 //suma y asignacion
o **= p;
console.log(o);

//operadores de cadena
let q = "cuarto";
let r = "semestre";

console.log(q + r);

//operadores de comparacion 
//igualdad
console.log(4 == 4);
console.log(4 == "4");
console.log(4 === "4");

//no igualdad
console.log(4 != "4"); //son iguales
console.log(4 !== "4");//no son iguales

//mayor y menor que
const s = 35;
const t = 23;
console.log(s <= t);
console.log(s >= t);
console.log(s < t);
console.log(s > t);

//operadores logicos
const on = true;
const open = false;

console.log(on && open); //and
console.log(on || open); //or
console.log(!open);      //not

//operadores binarios
/** 
 * & and
 * | or
 * ^ xor
 * ~ not
 * << left shift
 * >> rigth shift
 * >>> rigth shift sin signo
 */

//tabla de verdad
/**
 *  a | b |and|or|xor|not| and |not-or|not-xor|
 *  0 | 0 | 0 |0 | 0 | 1 |  1  |   1  |   1   |
 *  0 | 1 | 0 |1 | 1 | 0 |  1  |   0  |   0   |
 *  1 | 0 | 0 |1 | 1 | 0 |  1  |   0  |   0   |
 *  1 | 1 | 1 |1 | 0 | 1 |  0  |   0  |   1   |
 */

let num1 = 4;
let num2 = 9;

console.log(num1 << 2);

//Operador coma (,)
let arrayEstatura = [156, 198, 148, 178];
console.log(arrayEstatura);
console.log(arrayEstatura.push(134, 166), arrayEstatura.length);

let u = 1 + 1, v = 7 + 2, w = 12 + 1;
console.log(u **= 2, u);

//operador ternario
let y = 45;
let z = 23;
if (a > b) {
    console.log(`${y} es mayor que ${z}`);
} else {
    console.log(`${z} es mayor que ${y}`);
}

//condicion ? valor1 : valor2

let resultado = (y > z) ? `${z} es mayor que ${y}` : `${z} es mayor que ${y}`;
console.log(resultado);

//operador nulish coalescing
let aa = 48;
let bb = 12;

let result = aa ?? bb;
console.log(result);

const cliente = {
    nombre: "gorge",
    edad: "",
    direccion: "  ",
    numeroTelefono: "9514472954"
};

const datosClienteFinal = {
    nombre: cliente.nombre ?? "Invitado",
    edad: cliente.edad !== " " ? cliente.edad : 18,
    direccion: cliente.direccion ?? "Domicilio Conocido",
    numeroTelefono: cliente.numeroTelefono ?? "0000000000"
}

console.log(datosClienteFinal);

