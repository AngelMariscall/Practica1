/*const arrayEmpleado = ["perla", "katia", "heyla", "karla"];
console.log(arrayEmpleado[0]);

const arrayTipoDatos = ["leon", { genero: "hembra" },
    function () { console.log("Hola mundo") }, false, 43];

console.log(arrayEmpleado);
console.log(arrayTipoDatos[2]);

//creacion de array vacio
let arrayVacio = new Array();
let arrayVacio2 = [];

console.log(arrayVacio2);
//agrega a la posicion si hay un espacio antes los guarda aunque se ocupe el push
console.log(arrayEmpleado);
arrayEmpleado[1] = "maria";
console.log(arrayEmpleado);

//metodo push
arrayEmpleado.push("Marlen");
arrayEmpleado[6] = "esther";
arrayEmpleado.push("sandra");
console.log(arrayEmpleado);

for (let i = 0; i < arrayEmpleado.length; i++) {
    console.log(arrayEmpleado(i));

}*/

//operador de propagacion
const frutas = ["pera", "melon", "sandia"]
const frutascopia = [...frutas];

frutascopia[3] = "mango";
console.log(frutas);
console.log(frutascopia);
//forma 1
for (let i = 0; i < frutascopia.length; i++) {
    console.log(frutascopia[i]);
}
//forma 2
frutascopia.forEach(element => {
    console.log(element);
});

//array multidimencionales(matrices)
let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 5],
    [4, 8, 2, 5, 6],
];

let matrix2 = [
    ["a", "b", 3],
    [2, 5, 7],
    [function () { console.log("buenas") }],
]
matrix2[2][0]();
console.log(matrix[0][3]);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}


matrix.forEach(element1 => {
    element1.forEach(element2 => {
        console.log(element2);
    });
});