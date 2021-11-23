//CONSTANTES REQUERIDAS PARA EL PROYECTO
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser= require('body-parser')
require('./database')

//voy a configurar el puerto

app.set('Port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

//Middlewares
app.use('/admin',require('./routes/Admin.routes'))
app.use('/solicitud',require ('./routes/Solicitud.routes'))


app.listen(app.get('Port'),()=>{
    console.log('Hola soy el servidor y estoy escuchando por el puerto', app.get('Port'))
})
