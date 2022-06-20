//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente

router.post('/', transaccionCtrl.createTansaccion);//Dar de alta una Transaccion
router.get('/', transaccionCtrl.getTransacciones);//Recuperar TODAS las Transacciones Registradas
router.get('/emailCliente/', transaccionCtrl.getHistoricoEmail);//-Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
//router.get('/monedaOrigen/monedaDestino', transaccionCtrl.getTransaccionesParametros);
router.get('/monedas/', transaccionCtrl.getTransaccionesParametros);
//exportamos el modulo de rutas
module.exports = router;