const SolicitudesCtrl = {};
const Solicitud = require('../models/Solicitud.models');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// FUNCION PARA CREAR SOLICITUD DE RENTA
SolicitudesCtrl.crearSolicitud=async(req,res)=>{
    
    const{nombre, apellidos, identificacion, correo, telefono}=req.body
    NuevaSolicitud = new Solicitud({
        nombre,
        apellidos,
        identificacion,
        correo, 
        telefono
    })

    // const nombrePersona = await Solicitud.findOne({nombre:nombre})
    // if (nombrePersona){
    //     res.json({
    //         mensaje: 'El usuario ya ha solicitado rentar este inmueble'
    //     })
    // }

    await NuevaSolicitud.save()
    res.json({
        mensaje:'solicitud enviada'
    })
}

// FUNCION PARA LISTAR SOLICITUDES DE RENTA EN BASE DE DATOS
SolicitudesCtrl.listar = async(req,res)=>{

    const obtenerSolicitudes = await Solicitud.find()
    res.json(obtenerSolicitudes)
}

// FUNCION PARA LISTAR SOLICITUD POR ID
SolicitudesCtrl.listarId = async(req,res)=>{

    const id = req.params.id
    const respuesta = await Solicitud.findById({_id: id})
    res.json(respuesta)
}

// FUNCION PARA FILTRAR SOLICTUD POR EL NOMBRE PERSONA

SolicitudesCtrl.buscarPorNombre = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Solicitud.find({nombre:id})
    res.json(respuesta)
}


// FUNCION PARA  ELIMINAR SOLICTUD DE RENTA
SolicitudesCtrl.eliminarSolicitud = async(req,res) =>{

    const id = req.params.id
    await Solicitud.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'La solicitud ha sido eliminada'
    })
}

// FUNCION PARA ACTUALIZAR UNA SOLICTUD
SolicitudesCtrl.actualizarSolicitud = async(req,res)=>{
    const id = req.params.id
    await Solicitud.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje:'La solictud de renta ha sido actualizada'
    })
}

// FUNCION PARA FILTRAR UNA SOLICITUD CON LA IDENTIFICACION DE LA PERSONA
SolicitudesCtrl.buscarPorIdentificacion = async(req,res)=>{
    const identificacion = req.params.criterio;

    try{

        const respuesta = await Solicitud.find({identificacion:identificacion})
        res.json({respuesta})

    }catch(error){

        return res.status(400).json({
            mensaje:'Ha ocurrido un error'
        })

    }
}


module.exports = SolicitudesCtrl