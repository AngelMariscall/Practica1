//validacion de numero
/*const edad = "22";
if (edad.trim() != "") {
    if (isNaN(edad)) {
        console.log("Ingresa un valor numerico");
    }
    else {
        console.log("Felicidades tu edad es: ", parseInt(edad));
    }
} else {
    console.log("ingresa un valor");

}*/

//!== null
//!== ""
//!== " "
//!== undefined

const cliente = {
    nombre: "gorge",
    edad: "hola",
    direccion: "",
    numeroTelefono: "9514472954"
};

const datosClienteFinal = {
    nombre: cliente.nombre ?? "Invitado",
    edad: cliente.edad !== null &&
        cliente.edad !== "" &&
        cliente.edad !== " " &&
        cliente.edad !== undefined ? cliente.edad : 18,
    direccion: cliente.direccion ?? "Domicilio Conocido",
    numeroTelefono: cliente.numeroTelefono ?? "0000000000"
}

console.log(datosClienteFinal);