const db = require('../database/models')

module.exports = {
    mostrarAdd : (req, res) =>{
        return res.render('addProducts',{
            title: 'Crear un producto'
        })
    }
}