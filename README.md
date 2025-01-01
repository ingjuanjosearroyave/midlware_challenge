# midlware_challenge

# Middleware General
El middleware proporciona una capa de validación y preprocesamiento para cualquier ruta que lo implemente.

Ubicación: pages/api/middleware.js
Propósito:

Validar el método de la solicitud (POST o GET).
Verificar que las solicitudes POST incluyan un cuerpo en formato JSON.
Manejar errores de forma centralizada, garantizando respuestas consistentes.


# Gestión de Citas
Ubicación: pages/api/appointments.js
Funcionalidad:

POST: Permite agregar una nueva cita.
Requiere los campos date, time y details.
Valida que todos los datos sean proporcionados antes de procesarlos.
GET: Permite listar todas las citas (por ahora, simulado con una lista vacía).

# Gestión de Reportes de Daños
Ubicación: pages/api/reports.js
Funcionalidad:

POST: Permite registrar un reporte de daño.
Requiere los campos location, description y reportedBy.
Valida que todos los datos sean proporcionados antes de procesarlos.
GET: Permite listar todos los reportes (por ahora, simulado con una lista vacía).