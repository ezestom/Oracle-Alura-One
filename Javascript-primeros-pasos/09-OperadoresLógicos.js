const ciudadDestino = "Londres";
const ciudades = ["Buenos Aires", "Paris", "Barcelona", "Madrid", "Londres"];

if (ciudades.indexOf(ciudadDestino) >= 0) {
	console.log(`Si, es posible viajar a ${ciudadDestino}`);
} else {
	console.log(`No, no es posible viajar a ${ciudadDestino}`);
}

//Operadores Lógicos
// && AND
// || OR
// ! NOT
let edadPasajero = 15;
let estaAcompanado = false;

if (
	(edadPasajero >= 18 && ciudades.indexOf(ciudadDestino) >= 0) ||
	estaAcompanado
) {
	console.log(
		`Si, es posible viajar a ${ciudadDestino}, porque eres adulto y/o estas acompañado.`
	);
} else {
	console.log(
		`No, no es posible viajar a ${ciudadDestino}, porque eres menor de edad y no estás acompañado.`
	);
}
