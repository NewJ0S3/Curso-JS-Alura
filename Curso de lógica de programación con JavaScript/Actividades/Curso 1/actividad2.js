// Actividad 2

// Desafios:

// 1.Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDeLaSemana = prompt("¿Que dia de la semana es?");

if (diaDeLaSemana == "Sabado" || diaDeLaSemana == "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// 2.Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt("Dame un numero:");

if (numero > 0) {
    alert("El numero " + numero + " es un numero positivo");
} else if (numero < 0) {
    alert("El numero " + numero + " es un numero negativo");
} else {
    alert("Error Nan");
}

// 3.Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
let puntuación = prompt("¿Cual fue tu puntuacion?");

if (puntuación >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar");
}

// 4.Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoDeTarjeta = 1200;

alert(`El saldo actual de tu tarjeta es de: ${saldoDeTarjeta}`);

// 5.Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("¿Cual es tu nombre?");

alert(`Bienvenido ${nombre}`);
