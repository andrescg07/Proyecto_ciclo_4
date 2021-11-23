const mongoose = require('mongoose')
const {Schema} = mongoose

const SolicitudSchema = new Schema({
    nombre:{type:String, required:[true, 'Debes ingresar tu nombre']},
    apellidos:{type:String, required:[true, '¡Los apellidos son necesarios!']},
    identificacion:{type:Number, required:[true,'Debes ingresar tu número de documento o identificacion']},
    correo:{type:String, required:[true,'Este campo es obligatorio']},
    telefono:{type:Number, required:[true,'Tienes que ingresar tu número telefonico']},
    date:{type:Date, default:Date.now}

})

module.exports = mongoose.model('solicitud', SolicitudSchema);