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

app.get('/perfil', (req,res) => {
    res.status(200).send('Creando nueva ruta');
});

app.put('/perfil', (req, res) => {
    if (req.body.telefono) {
        const telefono = req.body.telefono;
        res.status(200).send({
            "telefono" : "2411458790",
            "edad" : "23"
        })
    } else {
        res.status(400).send('Proporciona antes un telefono')
}
})

app.listen(8000, () => {
    console.log('Servidor en el puerto 8000');
});
