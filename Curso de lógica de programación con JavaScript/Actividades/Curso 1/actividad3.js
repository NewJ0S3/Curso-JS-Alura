// Actividad 3

//Desafios:

// 1.Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 2.Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador2 = 10;

while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

// 3.Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroUsuario = prompt("Dame un numero:");
let contadorProgresivo = 0;

while (contadorProgresivo <= numeroUsuario) {
    console.log(contadorProgresivo);
    contadorProgresivo++;
}

// 4.Crea un programa de cuenta decresiva. Pide un número y cuenta desde el numero hasta 0 utilizando un bucle 'while' en la consola del navegador.
let numeroUsuario2 = prompt("Dame un numero:");
let contadorDecresivo = 0;

while (numeroUsuario2 >= contadorDecresivo) {
    console.log(numeroUsuario2);
    numeroUsuario2--;
}
