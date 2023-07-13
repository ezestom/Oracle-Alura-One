const ciudades = [
	"Buenos Aires",
	"Medellin",
	"Santiago",
	"San Jose",
	"Caracas",
	"Bogota",
	"Montevideo",
	"Lima",
	"Quito",
	"La Paz",
	"Asuncion",
];
console.log(
	`En la siguiente lista estas las ciudades de Latinoamerica: ${ciudades}`
);
console.log(`La lista tiene ${ciudades.length} ciudades`);

const newCiudades = ciudades.pop();
console.log(newCiudades);
console.log(ciudades);

let isBsAs = ciudades.filter((ciudad) => ciudad == "Bueno Aires");
console.log(isBsAs);
let searchCityMajor6 = ciudades.filter((ciudadad) => ciudadad.length > 6);
console.log(searchCityMajor6);

let joinList = ciudades.join(" Ey! ");
console.log(joinList);

let indexOfLima = ciudades.indexOf('Lima');
console.log(`Lima se encuentra en la posición ${indexOfLima} de la lista`);

const paises = new Array('Argentina', 'Colombia', 'Chile', 'Costa Rica', 'Venezuela', 'Perú', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay');

let uniendoPaisesYCiudades = ciudades.concat(paises);
console.log(uniendoPaisesYCiudades);