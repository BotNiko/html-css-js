verHora = ()=>{
    let miHora = new Date();
    let horas = miHora.getHours().toString();
    let minutos = miHora.getMinutes().toString();
    if(minutos.length == 1){
        minutos = 0 + minutos
    }
    let segundos = miHora.getSeconds().toString();
    if(segundos.length == 1){
        segundos = 0 + segundos
    }
    document.forms[0].mireloj.value = horas + " / " + minutos + " / " + segundos;
}

var r = setInterval("verHora()", 500);