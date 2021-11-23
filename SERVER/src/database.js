// CONFIGURACION Y CONEXION A BASE DE DATOS CON MONGODB

const mongoose= require('mongoose')
URI=('mongodb://localhost/administradores')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// Promesa para confirmar conexion a BD y extraer el nombre de la base de datos
.then(db=> console.log('Estoy conectado a la bd:',db.connection.name))
.catch(error=> console.log(error))

module.exports = mongoose


