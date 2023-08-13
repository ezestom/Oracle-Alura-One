import { api } from "../service/api.js";
const redireccionamiento = "http://127.0.0.1:5500/CRUD_JS_Async-proyecto_base";

const nombre = document.querySelector("[data-nombre]");
const email = document.querySelector("[data-email]");
const form = document.querySelector("#formulario");

const obtenerInformacion = async () => {
	const url = new URL(window.location);
	const id = url.searchParams.get("id");

	if (id === null) {
		window.location.href = "/screens/error.html";
	}
	try {
		await api.detalleCliente(id).then((response) => {
			nombre.value = response.nombre;
			email.value = response.email;
		});
	} catch (error) {
		console.error(error);
	}
};

obtenerInformacion();

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const url = new URL(window.location);
	const id = url.searchParams.get("id");
	api.actualizarCliente(nombre.value, email.value, id);
	window.location.href = `${redireccionamiento}/screens/registro_completado.html`;
});
