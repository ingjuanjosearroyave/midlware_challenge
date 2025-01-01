import { middleware } from "./middleware";

const appointmentsHandler = async (req, res) => {
    const { method, body } = req;

    // Datos ficticios para las citas
    const mockAppointments = [
        { id: 1, date: "2024-01-15", time: "10:00 AM", details: "Cita técnica en zona urbana" },
        { id: 2, date: "2024-01-16", time: "3:00 PM", details: "Reunión de planificación en zona rural" },
        { id: 3, date: "2024-01-17", time: "1:00 PM", details: "Cita de mantenimiento preventivo" },
    ];

    if (method === "POST") {
        const { date, time, details } = body;


        if (!date || !time || !details) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

       
        const newAppointment = { id: Date.now(), date, time, details };
        mockAppointments.push(newAppointment);

        return res.status(201).json({ message: "Cita creada exitosamente", appointment: newAppointment });
    } else if (method === "GET") {
       
        return res.status(200).json({ appointments: mockAppointments });
    }

    res.setHeader("Allow", ["POST", "GET"]);
    return res.status(405).json({ error: `Método ${method} no permitido` });
};

export default middleware(appointmentsHandler);
