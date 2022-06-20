const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}



transaccionCtrl.createTansaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
        'status': '1',
        'msg': 'Transaccion guardado.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getHistoricoEmail = async (req, res) => {
   // var criteria={'emailCliente': 'hola@gmail.com'};
   var criteria={};
    if(req.query.emailCliente!=null && req.query.emailCliente!=""){
        criteria.emailCliente = { $regex: req.query.emailCliente, $options: "i" }};
    var transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
}

















transaccionCtrl.getTransaccionesParametros = async (req, res) => {
   // var criteria={'emailCliente': 'ARS','monedaDestino':'JPN'};
   var criteria={};
    if(req.query.emailCliente!=null && req.query.emailCliente!=""){
      criteria.emailCliente = { $regex: req.query.emailCliente, $options: "i" }};
    if(req.query.monedaDestino!=null && req.query.monedaDestino!=""){
      criteria.monedaDestino = { $regex: req.query.monedaDestino, $options: "i" }};


    var transacciones = await Transaccion.find(criteria);
    res.json(transacciones);
}



module.exports = transaccionCtrl;