/*function testvar() {
    var x = 34;
    if (true) {
        var x = 17;
        console.log(x);
    }

    console.log(x);
}

function scopeLet() {
    let x = 45;
    if (true) {
        let x = 90;
        console.log(x);
    }
    console.log(x);
}


const x = 23;
function scopeConst() {
    const x = 44;
    if (true) {
        const x = 77;
        console.log(x);
    }
    console.log(x);
}
console.log(x);

testvar();
scopeLet();
scopeConst();


if (true) {
    let z = 34;
    const w = 12;
    var y = 45;
}

console.log(y);
console.log(w);
console.log(z);*/

const dia = 14;
const mes = 2;
const dia_amor = 14;
const febrero = 2;

function ambitoBloque() {
    let musica = "";
    if (dia === dia_amor && mes === febrero) {
        musica = "rosas.mp3";
    }

    console.log(musica);
}

ambitoBloque();