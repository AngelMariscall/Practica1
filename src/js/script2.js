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
    console.log("el modelo del celular es: " + this.modelo);
}

console.log(electronico);
electronico.getmodelo();

console.log(electronico.marca);

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

