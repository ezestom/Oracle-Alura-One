import { api } from "../service/api.js";

const obtenerInformacion = async () => {
	const url = new URLSearchParams(window.location.search);

	const id = url.get("id");
	api.detalleCliente(id)
		.then((res) => {
			const nombre = document.querySelector("[data-nombre]");
			const email = document.querySelector("[data-email]");
			nombre.value = res.nombre;
			email.value = res.email;
         console.log(res);
		})
		.catch((error) => {
			console.error(error);
		});


};

obtenerInformacion();
