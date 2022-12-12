if(prompt("Ingrese su Edad") >= 18){
    window.location.href = "pagina.html";
}else{
    if (confirm("Usted continua bajo su responsabilidad!")) {
        window.location.href = "pagina.html";
    }
}