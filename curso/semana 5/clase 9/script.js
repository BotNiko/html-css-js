var pais = "España";
var continente = "Europa";
var antiguedad = "2021";
var paisContinente = pais + " " + continente;

pais = "Mexico";
continente = "Latinoamerica";

function funcion(){
    if(pais == "Mexico"){
        pais = "España";
        continente = "Europa";
    document.querySelector("#boton").innerHTML = "Viajar a Mexico"
    }else{
        pais = "Mexico";
        continente = "Latinoamerica";
    document.querySelector("#boton").innerHTML = "Viajar a España"
    }
    console.log("Esta en "+ pais + " (" + continente + ")");
}

console.log(pais, continente, antiguedad);
alert(paisContinente);
