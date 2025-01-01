import { middleware } from "./middleware";

const reportsHandler = async (req, res) => {
    const { method, body } = req;

  
    const mockReports = [
        { id: 1, location: "Calle 123, Zona Rural", description: "Falla en el suministro eléctrico", reportedBy: "Juan Pérez" },
        { id: 2, location: "Carrera 45, Zona Urbana", description: "Daño en el sistema de alcantarillado", reportedBy: "Ana Gómez" },
        { id: 3, location: "Vereda La Esperanza", description: "Desperfecto en el alumbrado público", reportedBy: "Carlos Martínez" },
    ];

    if (method === "POST") {
        const { location, description, reportedBy } = body;

      
        if (!location || !description || !reportedBy) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
        const newReport = { id: Date.now(), location, description, reportedBy };
        mockReports.push(newReport);

        return res.status(201).json({ message: "Reporte creado exitosamente", report: newReport });
    } else if (method === "GET") {
       
        return res.status(200).json({ reports: mockReports });
    }

    res.setHeader("Allow", ["POST", "GET"]);
    return res.status(405).json({ error: `Método ${method} no permitido` });
};

export default middleware(reportsHandler);

