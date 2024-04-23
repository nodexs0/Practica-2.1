function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GenerarDatos(nombre) {
    nombre = nombre.toString();
    nombre = nombre.toLowerCase();

    var caracteresExtra = ['_', 'X', 'Y', 'Z', '!', '?', '*', '$', '#', '@', '&', '%', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '=', '.', ',', ';', ':', '(', ')', '[', ']', '{', '}', '<', '>', '/', '\\', '|', '^', '~', '`', '"', '\''];

    var letras = nombre.split('');

    for (var i = letras.length - 1; i > 0; i--) {
        var j = generarNumeroAleatorio(0, i);
        var temp = letras[i];
        letras[i] = letras[j];

        if (generarNumeroAleatorio(1, 10) > 5) {
            console.log('Agregando caracter extra');
            var caracterAleatorio = caracteresExtra[generarNumeroAleatorio(0, caracteresExtra.length - 1)];
            letras.push(temp);
        } else {
            var caracterAleatorio = temp;
        }

        letras[j] = caracterAleatorio;
    }

    return letras.join('');
}

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`Hola mundo desde la ruta raíz!`);
});

app.post('/', (req, res) => {
    if (req.body.nombre) {
        const nombre = GenerarDatos(req.body.nombre);    
        var numeroAleatorio = generarNumeroAleatorio(1, 1000);
        res.status(200).send({ usuario: nombre, id: numeroAleatorio });
    } else {
        res.status(400).send('Debe proporcionar un usuario');
    }
});

app.get('/perfil', (req,res) => {
    res.status(200).send('Hola mundo desde la ruta /perfil');
});

app.put('/perfil', (req, res) => {
    if (req.body.telefono) {
        const telefono = GenerarDatos(req.body.telefono);
        var numeroAleatorio = generarNumeroAleatorio(1, 80);
        res.status(200).send({
            "telefono" : telefono,
            "edad" : numeroAleatorio
        })
    } else {
        res.status(400).send('Proporciona antes un telefono')
}
})

app.listen(8000, () => {
    console.log('Servidor en el puerto 8000');
});