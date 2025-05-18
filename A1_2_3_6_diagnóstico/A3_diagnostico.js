arreglo = [1, 2, 3];

function imprimir(material) {
    console.log(material);
}


function potenciaCuadrada(arreglo) {
 return arreglo.map(number => number**2);
}

imprimir(potenciaCuadrada(arreglo));