🚀Examen en línea de temática Gamer - Frontend y Backend

📌Descripción
Test App es un sistema de examen en línea con temática de videojuegos. El examen selecciona aleatoriamente 10 preguntas de un total de 30 preguntas previamente cargadas en la base de datos mediante un seed. 

Cada pregunta tiene un contador de 15 segundos para contestar. Al finalizar el examen, el sistema muestra una notificación indicando si el usuario aprobó o no según su calificación.

Este proyecto combina frontend y backend en la misma aplicación y permite evaluar conocimientos de manera interactiva y dinámica.

🛠️Tecnologías utilizadas
-Frontend: Next.js, Emotion Styled, FontAwesome, Axios, Yarn
-Backend: Node.js, Express, MongoDB (Mongoose), Cors, NPM

⚙️Instalación y ejecución

1.-Clonar el repositorio:
git clone https://github.com/EdannyDev/test-app.git

2.-Instalar dependencias:
npm install

3.-Configurar variables de entorno en un archivo .env en la raíz del proyecto:
PORT=5000
MONGO_URI=mongodb://localhost:27017/testDB

4.-Ejecutar el servidor backend y frontend en modo desarrollo:
node server.js para backend y yarn dev para frontend

5.-Abrir la aplicación en el navegador:
http://localhost:3000 mientras el backend este corriendo en http://localhost:5000

✨Características principales
-Examen en línea con temática de videojuegos.
-Selección aleatoria de 10 preguntas de un total de 30.
-Contador de 15 segundos por pregunta.
-Notificación de resultado al finalizar el examen, indicando si se aprobó o no.
-Frontend moderno con Emotion Styled y FontAwesome.
-Backend robusto con Node.js, Express y MongoDB.