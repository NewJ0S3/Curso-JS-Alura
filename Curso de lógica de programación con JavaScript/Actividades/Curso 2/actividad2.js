// Actividad 2

// Desafios:

// 1.Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludar() {
    return console.log("¡Hola, mundo!");
}

saludar();

// 2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludarPersona(nombre) {
    return console.log(`¡Hola,${nombre}!`);
}

saludarPersona(Pepe);

// 3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero) {
    return numero * 2;
}

doble(6);

// 4.Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(a, b, c) {
    return (a + b + c) / 3;
}

promedio(1, 2, 3);

// 5.Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

numeroMayor(4, 8);

// 6.Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numero(a) {
    return a * a;
}

numero(5);