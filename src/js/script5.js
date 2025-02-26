//convertir cadena json en objeto
let jsonString = '{"Nombre" : "bulbasor", "Poder": "hoja afilada", "Habilidad": "absorber"}'
let objPokemon = JSON.parse(jsonString);

console.log(objPokemon.Nombre);

//parseInt

let edad = parseInt("45");
console.log(edad);

let peso = parseFloat(50.15);
console.log(peso);

const birthday = "2001-05-22";
let fecha = Date.parse(birthday); //regresa valor en milisegundos
console.log(fecha);

let msg = "F"; // el espacio cuenta como caracter, validacion de charArt
if (msg != null && msg.length === 1 && msg != " ") {
    let caracter = msg.charAt(0);
    console.log("Tu caracter es: ", caracter);
}
else {
    console.log("ingresa un valor valido")
}
let genero = msg.charAt(10);

console.log(genero);
//fecha
//formato para fechas 
// YYYY - MM - DD   
// YYYY / MM / DD
const date = new Date();
console.log(`Fecha completa ${date}`);
console.log(`Solo fecha ${date.toDateString()}`);
console.log(`Año ${date.getFullYear()}`);
console.log(`Mes ${date.getMonth() + 1}`);
console.log(`Numero del dia de la semana ${date.getDay()}`);
console.log(`Dia del mes ${date.getDate()}`);
console.log(`Hora ${date.toLocaleTimeString()}`);


const date1 = new Date("2025-02-11");
const date2 = new Date("2025/02/11");
console.log(date1);
console.log(date2);

