const Pasaje = require('../models/pasaje');
const pasajeCtrl = {}

pasajeCtrl.createPasaje = async (req, res) => {
    var pasaje = new Pasaje(req.body);
    try {
        await pasaje.save();
        res.json({
        'status': '1',
        'msg': 'Pasaje guardado.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}

pasajeCtrl.getPasajes = async (req, res) => {
    var pasajes = await Pasaje.find().populate("pasajero");
    res.json(pasajes);
}


pasajeCtrl.deletePasaje = async (req, res)=>{
    try {
    await Pasaje.deleteOne({_id: req.params.id});
    res.json({
    status: '1',
    msg: 'Pasaje removed'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
  }
}


pasajeCtrl.modificarPasaje = async (req, res) => {
    const vagente = new Pasaje(req.body);
    try {
        await Pasaje.updateOne({_id: req.body._id}, vagente);
        res.json({
        'status': '1',
        'msg': 'Pasaje updated'
    })
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
  }
}


pasajeCtrl.getRecuperarPasajes = async (req, res) => {
  //  var criteria={'categoriaPasajero': 'm'};
  var criteria={};
  if(req.query.categoriaPasajero!=null && req.query.categoriaPasajero!=""){
    criteria.categoriaPasajero = { $regex: req.query.categoriaPasajero, $options: "i" }};
    var pasajes = await Pasaje.find(criteria);
    res.json(pasajes);
}



////creado para la modificacion
pasajeCtrl.getPasaje = async (req, res) => {
    const pasaje = await Pasaje.findById(req.params.id).populate("pasajero");
    res.json(pasaje);
}



module.exports = pasajeCtrl;
