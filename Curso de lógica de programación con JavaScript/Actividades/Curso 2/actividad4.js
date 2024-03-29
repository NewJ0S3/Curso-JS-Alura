// Actividad 4

// Desafios:

// 1.Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// 3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");

// 4.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrar(lenguajes) {
  return console.log(lenguajes);
}

mostrar(lenguajesDeProgramacion);

// 5.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function ordenInverso(lenguajes) {
  return console.logl(lenguajes.slice().reverse());
}

ordenInverso(lenguajesDeProgramacion);

// 6.Crea una función que calcule el promedio de los elementos en una lista de números.
let numeros = [2, 4, 6, 8];

function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let media = calcularMedia(numeros);
console.log('Média:', media);

// 7.Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista [0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
        menor = lista[i];
    }
  }

  console.log(`El numero mayor de la lsita es: ${mayor}`);
  console.log(`El numero menor de la lsita es: ${menor}`);
}

let numeros2 = [20, 6, 30, 7, 24];
encontrarMayorMenor(numeros2);

// 8.Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros3 = [25, 12, 8, 6, 14];
let suma = calcularSuma(numeros3);

// 9.Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

// 10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let listaDeNumeros1 = [25, 30, 10];
let listaDeNumeros2 = [5, 15, 40];

function sumaDeListas(lista1, lista2) {
  let listaDeNumeros3 = [];
  for (let i = 0; i < lista1.length; i++) {
    listaDeNumeros3.push(lista1[i] + lista2[i]);
  }
  return listaDeNumeros3; 
}

console.log(sumaDeListas(listaDeNumeros1, listaDeNumeros2));


// 11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let listaDeNumeros = [2, 4, 6];

function calcularCuadradoDeNumero(lista) {
  let cuadradoDeNumero = [];
  for (let i = 0; i < lista.length; i++) {
    cuadradoDeNumero.push(lista[i] * lista[i]);
  }
  return cuadradoDeNumero;
}

console.log(calcularCuadradoDeNumero(listaDeNumeros));