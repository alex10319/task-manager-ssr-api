# Task Manager SSR - Backend

## Descripción

Este es un **backend mínimo en Node.js + Express + TypeScript** para la prueba técnica de nivel semi-senior.  
Sirve datos de tareas en memoria para que el frontend React + TS pueda consumirlos.

El objetivo es que el candidato use este backend para completar la integración desde el frontend.

---

## Tecnologías

- Node.js 18+
- Express 4+
- TypeScript
- CORS habilitado

---

## Estructura del proyecto

src/
types/
Task.ts # Tipado de Task
modules/
Tasks.Controller.ts # Lógica de endpoints de tareas
Tasks.router.ts # Router de tareas
router.ts # Router principal que importa Tasks.router.ts
App.ts # App principal de Express
server.ts # Entry point, levanta el servidor

yaml
Copiar código

---

## Endpoints disponibles

Todos los endpoints se exponen bajo `/api/tasks`.

| Método | Ruta             | Descripción                    | Body (JSON)                         |
|--------|-----------------|--------------------------------|------------------------------------|
| GET    | `/api/tasks`     | Obtener todas las tareas       | -                                  |
| POST   | `/api/tasks`     | Crear nueva tarea              | `{ "title": string, "description"?: string, "priority": "low"|"medium"|"high" }` |
| PATCH  | `/api/tasks/:id` | Actualizar tarea existente     | `{ "title"?, "description"?, "completed"?, "priority"? }` |
| DELETE | `/api/tasks/:id` | Eliminar tarea por ID          | -                                  |

- Los IDs son números incrementales.
- Todos los datos se almacenan **en memoria**, no hay base de datos.

---

## Instalación

1. Clonar el repo:

```bash
git clone <repo-url>
cd task-manager-backend
```

2. Instalar dependencias:

```bash
npm install
```

3. Levantar el proyecto:

```bash
npm run dev
```

---

## Notas

Este backend es solo para la prueba técnica, no está pensado para producción.

No requiere base de datos; los cambios se mantienen solo mientras el servidor esté corriendo.

El frontend debe apuntar a http://localhost:3001/api/tasks para hacer fetch de datos.