const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.post('/saludo', (req, res) => {
    res.send(`Hola ${req.body.nombre}`);
});

app.listen(8000, () => {
    console.log('Servidor en el puerto 8000');
});
