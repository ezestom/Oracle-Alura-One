const URL = "http://localhost:3000/perfil";

const clientesList = () => fetch(URL).then((res) => res.json());

const createCliente = (nombre, email) => {
	return fetch(URL, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({ nombre, email, id: uuid.v4() }),
	});
};

const eliminarCliente = (id) => {
	if (window.confirm(`Desea eliminar el cliente con id ${id}?`)) {
		return fetch(`${URL}/${id}`, {
			method: "DELETE",
		});
	}
};

const detalleCliente = (id) => fetch(`${URL}/${id}`).then((res) => res.json());

export const api = {
	clientesList,
	createCliente,
	eliminarCliente,
	detalleCliente,
};
