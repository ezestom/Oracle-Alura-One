import { api } from "../service/api.js";

// Función para eliminar un cliente
const eliminarCliente = async (id) => {
	const response = await api.eliminarCliente(id);
	if (response.ok) {
		// Eliminación exitosa, puedes realizar alguna acción adicional si lo deseas
		console.log(`Cliente con ID ${id} eliminado`);
	} else {
		// Manejar el caso de error en la eliminación
		console.error(`Error al intentar eliminar el cliente con ID ${id}`);
	}
};

const createNewLine = (cliente) => {
	const line = document.createElement("tr");
	const content = `
    <td class="td" data-td>${cliente.nombre}</td>
    <td>${cliente.email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a href="../screens/editar_cliente.html?id=${cliente.id}" class="simple-button simple-button--edit">Editar</a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" data-id="${cliente.id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
	line.innerHTML = content;
	const btn = line.querySelector("button");
	btn.addEventListener("click", async () => {
		// Al hacer clic en el botón de eliminar, llamamos a la función eliminarCliente
		await eliminarCliente(cliente.id);
		// Después de eliminar el cliente, puedes actualizar la vista si es necesario
		// Por ejemplo, eliminar la fila de la tabla
		table.removeChild(line);
	});

	return line;
};

const table = document.querySelector("[data-table]");

api.clientesList().then((response) => {
	const perfil = response;
	if (Array.isArray(perfil)) {
		perfil.forEach((cliente) => {
			table.appendChild(createNewLine(cliente)); // Pasar el objeto completo del cliente
		});
	} else {
		console.error(
			"La respuesta de clientesList no es una lista válida de clientes:",
			perfil
		);
	}
});
