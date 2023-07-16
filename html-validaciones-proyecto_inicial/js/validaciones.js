const inputNacimiento = document.querySelector("#birth");

function inputsErrores() {
	const inputs = document.querySelectorAll("input");
	inputs.forEach((input) => {
		input.addEventListener("blur", (e) => {
			if (!input.checkValidity()) {
				input.parentElement.classList.add("input-container--invalid");
			} else {
				input.parentElement.classList.remove(
					"input-container--invalid"
				);
			}
		});
	});
}

inputNacimiento.addEventListener("blur", (e) => {
	validarNacimiento(e.target);
});
function validarNacimiento(input) {
	const fechaCliente = new Date(input.value);
	let mensaje = "";
	if (!mayorEdad(fechaCliente)) {
		mensaje = "Debes ser mayor de edad para registrarte";
	}
	input.setCustomValidity(mensaje);
}

function mayorEdad(fecha) {
	const fechaActual = new Date();
	const diferenciaFechas = new Date(
		fecha.getUTCFullYear() + 18,
		fecha.getUTCMonth(),
		fecha.getUTCDate()
	);
	return fechaActual >= diferenciaFechas;
}
