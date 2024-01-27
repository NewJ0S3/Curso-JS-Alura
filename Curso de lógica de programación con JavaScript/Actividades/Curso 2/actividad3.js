// Actividad 3

//  Desafios:

// 1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function imc(altura, peso) {
    return peso / (altura * altura);
}

//Altura en metros y peso en kilogramos
imc(1.80, 60);

// 2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    let respuesta = 1;

    for(let i = 1; i <= numero; i++) {
        respuesta *= i;
    }
    return respuesta;
}

calcularFactorial(5);

// 3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function conversionDeDolares(dolares) {
    let valorDolarEnCOP = 3930.50;
    return dolares * valorDolarEnCOP;
}

conversionDeDolares(5000);

// 4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaYperimetroRectangulo(base, altura) {
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    console.log(`El area del rectangulo es de ${area} y el perimetro es de ${perimetro}`);
    return;
}

// Base y altura en metros
areaYperimetroRectangulo(20, 10);

// 5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaYperimetroCirculo(radio) {
    let pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    console.log(`El area del circulo es de ${area} y el perimetro es de ${perimetro}`);
    return;
}

//Radio en metros
areaYperimetroCirculo(5);

// 6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
}

tablaDeMultiplicar(2);
