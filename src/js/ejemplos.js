let frase = "el resepeto al derecho ajeno es la paz";
console.log(frase.toLocaleUpperCase());

let frase2 = "EL RESPETO AL DERECHO AJENO ES LA PAZ";
console.log(frase2.toLocaleLowerCase());

console.log(frase.indexOf("paz"));
console.log(frase.lastIndexOf("ajeno"));
console.log(frase.includes("ajeno"));
console.log(frase.startsWith("e"));
console.log(frase.endsWith("x"));
console.log(frase.slice(11, 37));
console.log(frase.substring(11));
/*
console.log(frase.codePointAt());

console.log(frase.trim());
console.log(frase.repeat());
console.log(frase.test());*/

let expreg = /\d+/;
let pass = "Ho89L@";
console.log(expreg.test(pass));