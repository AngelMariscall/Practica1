/*//Map
let miMapa = new Map();
miMapa.set('clave1', 'leon');
miMapa.set('clave2', 'tigre');
miMapa.set('clave3', 'jirafa');

console.log(miMapa.get('clave2'));

let mapaDatosPersona = new Map();
mapaDatosPersona.set('Nombre', 'Angel');
mapaDatosPersona.set('Direccion', 'Av monte Alban');
mapaDatosPersona.set('Genero', 'Masculino');

console.log(mapaDatosPersona.get('Nombre'));

mapaDatosPersona.forEach(valor, clave => {
    console.log(`clave: ${clave} Valor: ${valor}`);
});*/


//Set
let miSet = new Set();
miSet.add("silla");
miSet.add("mesa");
miSet.add("banco");
miSet.add("sillon");

console.log(miSet.has('silla'));
miSet.forEach(element => {
    console.log(element);
});

//estructuras de control
//estructuras de control selectivas
