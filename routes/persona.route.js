//defino controlador para el manejo de CRUD
const personaCtrl = require('./../controllers/persona.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente

router.post('/', personaCtrl.createPersona);//Dar de alta una persona
router.get('/', personaCtrl.getPersonas);//Obtener todas las personas
router.get('/:id', personaCtrl.getPersona);//Obtener UNA persona


//exportamos el modulo de rutas
module.exports = router;