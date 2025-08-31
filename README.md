# 🚀Examen en línea de temática Gamer – Frontend y Backend  

## 📌Descripción  
**Test App** es un sistema de examen en línea con **temática de videojuegos**.  

El sistema permite:  
- Seleccionar aleatoriamente **10 preguntas** de un total de 30 previamente cargadas en la base de datos mediante seed.  
- Cada pregunta tiene un **contador de 15 segundos** para responder.  
- Al finalizar el examen, se muestra una **notificación indicando si el usuario aprobó o no** según su calificación.  

Este proyecto combina **frontend y backend** en la misma aplicación y permite evaluar conocimientos de manera **interactiva y dinámica**.  

## 🛠️Tecnologías utilizadas
### Frontend  
- **Next.js**  
- **Emotion Styled**  
- **FontAwesome**  
- **Axios**  
- **Yarn**  

### Backend  
- **Node.js**  
- **Express** (Framework para APIs REST)  
- **MongoDB / Mongoose** (Base de datos NoSQL y modelado de datos)  
- **CORS**  
- **NPM**  

## ⚙️Instalación y ejecución  

```bash
# 1. Clonar el repositorio
git clone https://github.com/EdannyDev/test-app.git

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno en .env

PORT=5000
MONGO_URI=mongodb://localhost:27017/testDB

# 4. Ejecutar la aplicación
En una terminal, iniciar el backend
node server.js

# 5. En otra terminal, iniciar el frontend
yarn dev

# 6. El sistema estará disponible en el navegador:
http://localhost:3000

# 7. El backend estará funcionando en:
http://localhost:5000

```

## 🗂️Endpoints principales
- Preguntas: `/api/questions`

## ✨Características principales
- Examen en línea con temática de videojuegos
- Selección aleatoria de 10 preguntas de un total de 30
- Contador de 15 segundos por pregunta
- Notificación de resultado al finalizar el examen, indicando si se aprobó o no
- Frontend moderno con Emotion Styled y FontAwesome
- Backend robusto con Node.js, Express y MongoDB
