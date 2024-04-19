const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`Hola mundo`);
});

app.post('/', (req, res) => {
    if (req.body.nombre) {
        const nombre = req.body.nombre;
        res.status(200).send({ mensaje: `Hola ${nombre}` });
    } else {
        res.status(400).send('Debe proporcionar un nombre');
    }
});

app.listen(8000, () => {
    console.log('Servidor en el puerto 8000');
});
