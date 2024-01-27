// Actividad 1

// Desafios

// 1.Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.

// 2.Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafio"

// 3.Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function boton1() {
    console.log("El boton fue clickeado");
}

// 4.Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function boton2() {
    let ciudad = prompt("¿Que ciudad del mundo te gustaria conocer?");
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

// 5.Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function boton3() {
    alert("Yo amo JS");
}

// 6.Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function boton4() {
    let numero1 = parseInt(prompt("Dame un numero:"));
    let numero2 = parseInt(prompt("Dame otro numero:"));
    let suma = numero1 + numero2;
    alert(`La suma entre ${numero1} y ${numero2} es igual a ${suma}`);
}
