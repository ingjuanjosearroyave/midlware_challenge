export const middleware = (handler) => async (req, res) => {
    try {
        // Middleware: Validar método de la solicitud
        if (!["POST", "GET"].includes(req.method)) {
            return res.status(405).json({ error: "Método no permitido" });
        }

        // Middleware: Validar contenido (JSON esperado en POST)
        if (req.method === "POST" && !req.headers["content-type"]?.includes("application/json")) {
            return res.status(400).json({ error: "Se requiere un cuerpo JSON válido" });
        }

     
        req.body = req.method === "POST" ? JSON.parse(req.body) : null;

       
        return await handler(req, res);
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};
