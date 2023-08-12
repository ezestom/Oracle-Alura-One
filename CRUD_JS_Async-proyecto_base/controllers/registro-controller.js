import { api } from "../service/api.js";

const formlulario = document.querySelector("[data-form]");

formlulario.addEventListener("submit", (event) => {
	event.preventDefault();
	const nombre = document.querySelector("[data-nombre]").value;
	const email = document.querySelector("[data-email]").value;
	api.createCliente(nombre, email);
	console.log(nombre, email);
	api.createCliente(nombre, email, id)
		.then((res) => {
			window.location.href = "../screens/registro_completado.html";
			console.log(res);
		})
		.catch((error) => {
			console.error(error);
		});
});
