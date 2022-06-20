const Libro = require('../models/libro');
const libroCtrl = {}



libroCtrl.createLibro = async (req, res) => {
    var libro = new Libro(req.body);
    try {
        await libro.save();
        res.json({
        'status': '1',
        'msg': 'Libro guardado.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}

libroCtrl.getLibros = async (req, res) => {
    var libros = await Libro.find();
    res.json(libros);
}

libroCtrl.editLibro = async (req, res) => {
    const vagente = new Libro(req.body);
    console.log(req.body);
    try {
        await Libro.updateOne({_id: req.body._id}, vagente);
        res.json({
        'status': '1',
        'msg': 'Libro updated'
    })
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

libroCtrl.deleteLibro = async (req, res)=>{
    try {
        await Libro.deleteOne({_id: req.params.id});
        res.json({
        status: '1',
        msg: 'Libro removed'
    })
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

libroCtrl.getLibroDestacado = async (req, res) => {
    var criteria={'destacado': true};
    var libros = await Libro.find(criteria);
    res.json(libros);
}
module.exports = libroCtrl;
