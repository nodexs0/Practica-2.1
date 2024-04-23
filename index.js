// Funcion para generar un numero aleatorio entre un rango
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funcion para generar datos aleatorios
function GenerarDatos(nombre) {

    // Convertir a string y a minusculas
    nombre = nombre.toString();
    nombre = nombre.toLowerCase();

    // Caracteres extra
    var caracteresExtra = ['_', 'X', 'Y', 'Z', '!', '?', '*', '$', '#', '@', '&', '%', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '=', '.', ',', ';', ':', '(', ')', '[', ']', '{', '}', '<', '>', '/', '\\', '|', '^', '~', '`', '"', '\''];

    // Convertir a array
    var letras = nombre.split('');

    // Recorrer el array
    for (var i = letras.length - 1; i > 0; i--) {
        // Generar un numero aleatorio
        var j = generarNumeroAleatorio(0, i);

        // Intercambiar los valores
        var temp = letras[i];
        letras[i] = letras[j];

        // Agregar un caracter extra
        if (generarNumeroAleatorio(1, 10) > 5) {
            // Seleccionar un caracter aleatorio
            var caracterAleatorio = caracteresExtra[generarNumeroAleatorio(0, caracteresExtra.length - 1)];
            // Agregar temp
            letras.push(temp);
        } else {
            // Agregar el caracter original
            var caracterAleatorio = temp;
        }
        
        // Agregar el caracter aleatorio
        letras[j] = caracterAleatorio;
    }

    // Convertir a string
    return letras.join('');
}

// Importar express
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    // Enviar una respuesta
    res.status(200).send(`Hola mundo desde la ruta raíz!`);
});

// Ruta con un parámetro
app.post('/', (req, res) => {
    // Verificar si se proporcionó un nombre
    if (req.body.nombre) {
        // Generar un nombre aleatorio
        const nombre = GenerarDatos(req.body.nombre);    

        // Generar un número aleatorio
        var numeroAleatorio = generarNumeroAleatorio(1, 1000);

        // Enviar una respuesta
        res.status(200).send({ usuario: nombre, id: numeroAleatorio });
    } else {
        // Enviar un mensaje de error
        res.status(400).send('Debe proporcionar un usuario');
    }
});

// Ruta /perfil 
app.get('/perfil', (req,res) => {
    // Enviar una respuesta
    res.status(200).send('Hola mundo desde la ruta /perfil');
});

// Ruta /perfil con un parámetro
app.put('/perfil', (req, res) => {
    // Verificar si se proporcionó un teléfono
    if (req.body.telefono) {
        // Generar un teléfono aleatorio
        const telefono = GenerarDatos(req.body.telefono);

        // Generar un número aleatorio
        var numeroAleatorio = generarNumeroAleatorio(1, 80);

        // Enviar una respuesta
        res.status(200).send({
            "telefono" : telefono,
            "edad" : numeroAleatorio
        })
    } else {
        // Enviar un mensaje de error
        res.status(400).send('Proporciona antes un telefono')
}
})

// Servidor en escucha en el puerto 8000
app.listen(8000, () => {
    console.log('Servidor en el puerto 8000');
});