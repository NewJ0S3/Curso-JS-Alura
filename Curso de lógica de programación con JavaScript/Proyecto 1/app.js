alert('Bienvenido al juego del número secreto, tienes 3 intentos');

//Numero aleatorio entre 1 y 10
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Indicame un numero entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroSecreto} y lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else  {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secretos es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        //Incrementamos el contador cuando no se acierta
        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condicion no se cumplio
        // alert("Los siento, no acertaste el numero");
    }
}
