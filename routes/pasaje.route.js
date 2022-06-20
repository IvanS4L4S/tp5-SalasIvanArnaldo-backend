//defino controlador para el manejo de CRUD
const agenteCtrl = require('./../controllers/pasaje.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', agenteCtrl.createPasaje);//Dar de alta un pasaje (POST), enviar además el pasajero.
router.get('/', agenteCtrl.getPasajes);//Recuperar TODOS los pasajes (GET) incluyendo la información de los pasajeros.
router.delete('/:id', agenteCtrl.deletePasaje);//Eliminar un pasaje 
router.put('/:id', agenteCtrl.modificarPasaje);//Modificar un pasaje
router.get('/categoria/', agenteCtrl.getRecuperarPasajes);//Recuperar SOLO los pasajeros que tienen una determinada categoría de Pasajero
//exportamos el modulo de rutas

router.get('/:id', agenteCtrl.getPasaje)//recupera solo por id
module.exports = router;
