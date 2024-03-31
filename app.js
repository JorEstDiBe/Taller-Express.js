const express = require('express');
const app = express();
const PORT = 3000; // Puerto en el que se ejecutará el servidor

// Middleware para manejar datos JSON
app.use(express.json());

// Definir un endpoint
app.get('/Mariana', (req, res) => {
  res.send('Hola, soy Mariana');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('Servidor Express en ejecución en el puerto ${PORT}');
});