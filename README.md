Backend para la Gestión de Tareas y Usuarios
Descripción General
Este proyecto es una solución backend para la gestión de tareas y usuarios. Está construido utilizando Express, TypeScript y Firebase Cloud Functions, siguiendo una arquitectura limpia con una estructura modular. El proyecto está diseñado para ser escalable y mantenible, aprovechando Inversify para la inyección de dependencias.

Estructura del Proyecto
El proyecto está organizado en dos módulos principales: task y user. Cada módulo sigue una arquitectura por capas que promueve la separación de responsabilidades:

src/
  ├── modules/
  │   ├── task/
  │   │   ├── application/    # Casos de uso y lógica de aplicación
  │   │   ├── domain/         # Modelos de dominio e interfaces
  │   │   └── infrastructure/ # Repositorios, controladores y servicios externos
  │   └── user/
  │       ├── application/
  │       ├── domain/
  │       └── infrastructure/
  
Características Principales
Arquitectura Limpia: El proyecto sigue los principios de la arquitectura limpia, asegurando una clara separación entre la lógica de negocio, los modelos de dominio y las preocupaciones de infraestructura.
Estructura Modular: Cada módulo es independiente, lo que facilita el mantenimiento y la escalabilidad a medida que el proyecto crece.
Inyección de Dependencias: Utiliza Inversify para gestionar las dependencias, lo que promueve la flexibilidad y la capacidad de prueba dentro de la aplicación.
Comenzando
Para ejecutar este proyecto localmente, sigue estos pasos:

Prerrequisitos
Node.js (versión 18 o superior)
Firebase CLI instalado globalmente en tu máquina.
Una cuenta de Firebase para autenticar tu sesión.
Instalación
Clonar el repositorio:

npm install
firebase login (Autenticar con Firebase:)
Ejecutar el Proyecto Localmente
Para servir el proyecto localmente, utiliza el siguiente comando:

npm run serve
Este comando iniciará el emulador de Firebase, permitiéndote probar la API localmente.

Endpoints de la API
Una vez que el proyecto esté en funcionamiento, puedes acceder a la API en:

http://127.0.0.1:5001/task-atom-backend/us-central1/api/tasks
Despliegue
Nota: Este proyecto no está desplegado en producción debido a las limitaciones de una cuenta gratuita de Firebase.
