// Actividad 1: Fundamentos de JavaScript.
// 1)
let nombre = "Alicia";
let edad = 22;

console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// 2):
const numeros = [3, 7, 12, 5, 2];

// Uso de map:
let mapped = numeros.map((numero) => {
	return numero**2
});

console.log(`El numero al cuadrado es ${mapped}`);

// Uso de filter:
let filtered = numeros.filter((numero) => {
	return numero > 5;
});

console.log(`Los números mayores a 5 del arreglo son ${filtered}`);

// 3) Funcón flecha:

(n1, n2) => {return n1 + n2};

// Actividad 2:

const esImpar = (number) => {
	 result = number % 2 === 0;
	return result;
}

console.log(esImpar(8));
console.log(esImpar(3));