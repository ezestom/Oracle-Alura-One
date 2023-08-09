const createNewLine = (nombre, email) => {
	const line = document.createElement("tr");
	const content = `
          <td class="td" data-td>${nombre}</td>
          <td>${email}</td>
          <td>
            <ul class="table__button-control">
              <li>
                <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
              </li>
              <li>
                <button class="simple-button simple-button--delete" type="button">
                  Eliminar
                </button>
              </li>
            </ul>
          </td>
        `;
	line.innerHTML = content;
	return line;
};
const clientesList = () => {
	const promise = new Promise((resolve, reject) => {
		const http = new XMLHttpRequest();
		http.open("GET", " http://localhost:3000/perfil");
		http.send();

		http.onload = function () {
			const response = JSON.parse(http.response);
			if (http.status >= 400) {
				reject(response);
			} else {
				resolve(response);
			}
		};
	});
	return promise;
};
clientesList()
	.then((data) => {
		data.forEach((perfil) => {
			const newLine = createNewLine(perfil.nombre, perfil.email);
			table.appendChild(newLine);
		});
	})
	.catch((err) => {
		throw new Error(err);
	});

const table = document.querySelector("[data-table]");
