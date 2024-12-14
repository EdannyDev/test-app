const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Inicializar la aplicación Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost/testDB', {
});

// Verificar conexión a MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

// Importar rutas
const questionsRoute = require('./routes/questions');

// Usar rutas
app.use('/api/questions', questionsRoute);

// Escuchar en el puerto 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});