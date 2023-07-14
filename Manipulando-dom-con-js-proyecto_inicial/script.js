const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
const task = document.createElement("li");
const list = document.querySelector("[data-list]");

function createTask(e) {
	e.preventDefault();
	const value = input.value;
	input.value = "";
	const content = `
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
          
          <i class="fas fa-trash-alt trashIcon icon"></i>`;
	task.innerHTML = content;
	const taskContent = document.createElement("div");
	taskContent.appendChild(checkComplete());
	task.classList.add("card");
	list.appendChild(task);

	if (value === "") {
		input.classList.add("error");
		Swal.fire({
			position: "top",
			icon: "error",
			title: "Debes rellenar el campo",
			showConfirmButton: false,
			timer: 1500,
		});
	} else {
		input.classList.remove("error");
	}
}

btn.addEventListener("click", createTask);
const checkComplete = () => {
	const i = document.createElement("i");
	i.classList.add("far", "fa-check-square", "icon");
	return i;
};
