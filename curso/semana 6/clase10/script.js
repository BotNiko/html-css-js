let nombre = "Programación" + " Fácil.";
let saludo = "Les doy la bienvenida a ";
let fraseCompleta = saludo + nombre;
let extraVarinable = " Segunda Edicion" ;
fraseCompleta = fraseCompleta + extraVarinable;
console.log(fraseCompleta);

let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos.";
console.log(frase);

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";
let concatenaNumeros = numeroString1 + " " + numeroString2 + " " + numeroString3;
console.log(concatenaNumeros);

let edad;
let sexo;
edad = prompt("Introduce tu edad");
sexo = prompt("Introduce tu sexo (hombre o mujer)");

    if (edad >= 18 && sexo == "hombre" ){
        alert("Puedes entrar, eres mayor de edad.");
    }else if (edad >= 20 && sexo == "mujer"){
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }