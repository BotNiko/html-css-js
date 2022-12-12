let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {
    case "lunes":
        alert("Caminar 5 km");
        break;

    case "martes":
        alert("45 Flexiones de brazo (3 series de 15)");
        break;

    case "miércoles":
        alert("Descanso");
        break;

    case "jueves":
        alert("Trotar 20 min");
        break;

    case "viernes":
        alert("45 Abdominales (3 series de 15)");
        break;

    case "sábado":
        alert("Caminar 5 km");
        break;

    case "domingo":
        alert("Descanso");
        break;

    default:
        alert("Escribe el día de la semana en minúsculas.");
}

for (i = 20; i <= 70; i++) {
    document.write("El número es: " + i + "<br>");
}

let cant = prompt('Cantidad de veces que aparecera "Hola Mundo"');
for (i = 1; i <= cant; i++) {
    document.write("Hola Mundo N: " + i + "<br>");
}