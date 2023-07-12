const ciudad1 = "Bogotá";
const ciudad2 = "Medellín";
const ciudad3 = "Cali";

const ciudades = [ciudad1, ciudad2, ciudad3];
console.log(ciudades);
const ciudad4 = "Barranquilla";

const ciudades2 = new Array(ciudad1, ciudad2, ciudad3, ciudad4);
console.log(ciudades2);

const ciudad5 = "Cartagena";

ciudades2.push(ciudad5);

console.log(ciudades2);

ciudades2.shift(0);

console.log(ciudades2);