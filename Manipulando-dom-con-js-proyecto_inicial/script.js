const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
const list = document.querySelector("[data-list]");

function createTask(e) {
	e.preventDefault();
	const value = input.value;
	input.value = "";

	if (value === "") {
		// El input está vacío
		input.classList.add("error");
		Swal.fire({
			position: "top",
			icon: "error",
			title: "Debes rellenar el campo",
			showConfirmButton: false,
			timer: 1500,
		});
	} else {
		// El input no está vacío
		input.classList.remove("error");

		const task = document.createElement("li");
		task.classList.add("card");

		const taskContent = document.createElement("div");
		taskContent.classList.add("task");
		taskContent.innerText = value;

		const trashIcon = document.createElement("i");
		trashIcon.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");

		const checkIcon = document.createElement("i");
		checkIcon.classList.add("far", "fa-check-square", "icon");
		let isChecked = false; // Variable de estado

		checkIcon.addEventListener("click", (e) => {
			isChecked = !isChecked; // Alternar el estado al hacer clic
			if (isChecked) {
				checkIcon.classList.add("checked");
				taskContent.classList.add("completed"); // Aplicar estilo completado
				// Agrega aquí la lógica adicional cuando la tarea esté completa
			} else {
				checkIcon.classList.remove("checked");
				taskContent.classList.remove("completed"); // Eliminar estilo completado
				// Agrega aquí la lógica adicional cuando la tarea ya no esté completa
			}
		});
		trashIcon.addEventListener("click", (e) => {
			Swal.fire({
				title: "Atención",
				text: "Deseas borrar tu tarea?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Si, borrar!",
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire(
						"Borrada!",
						"Tu tarea no se encuentra más en la lista.",
						"success"
					);
					list.removeChild(task);
				}
			});
		});

		task.appendChild(trashIcon);
		task.appendChild(taskContent);
		task.appendChild(checkIcon);

		list.appendChild(task);
	}
}

btn.addEventListener("click", createTask);
