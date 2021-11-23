const mongoose = require('mongoose')
const {Schema}= mongoose

const AdminSchema = new Schema({
    nombre: {type:String, required:[true,'Debes ingresar un nombre']},
    correo:{type:String, required:[true,'Debes ingresar un un correo']},
    contrasena:{type:String, required:[true,'Debes ingresar una contraseña']},
    date:{type:Date, default: Date.now}

    
})

// convertir a modelo

module.exports= mongoose.model('admin',AdminSchema)
