// json-server.js

import { create, defaults, router as _router } from "json-server";
const server = create();
const middlewares = defaults();

import cors from "cors"; // Importa el paquete cors
const router = _router("db.json"); // Cambia esto para que apunte a tu archivo db.json

server.use(middlewares);

// Habilita CORS para todas las solicitudes
server.use(cors());

// Usa el router de json-server
server.use(router);

const PORT = 3000;

server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
