//defino controlador para el manejo de CRUD
const libroCtrl = require('./../controllers/libro.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente

router.post('/', libroCtrl.createLibro);//Dar de alta un libro
router.get('/', libroCtrl.getLibros);//Recuperar TODOS los libros 
router.delete('/:id', libroCtrl.deleteLibro);//Eliminar un libro
router.put('/:id', libroCtrl.editLibro);//Modificar un libro
router.get('/destacado', libroCtrl.getLibroDestacado);//Recuperar los libros DESTACADOS


//exportamos el modulo de rutas
module.exports = router;