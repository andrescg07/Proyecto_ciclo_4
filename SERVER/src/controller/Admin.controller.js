const adminCtrl ={}
const Admin = require('../models/Admin.model')
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')

adminCtrl.crearAdmin= async (req,res)=>{
    const {nombre,correo,contrasena}= req.body 
    const NuevoAdmin = new Admin({
        nombre,
        correo,
        contrasena
    })

    const correoAdmin = await Admin.findOne({correo:correo})
    if(correoAdmin){
        res.json({
            mensaje: 'El correo ya existe'
        })
    }

    else{

        NuevoAdmin.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoAdmin._id},'Clave Secreta')
        await NuevoAdmin.save()
        res.json({
            mensaje:'Usuario Admin creado',
            id: NuevoAdmin._id,
            nombre:NuevoAdmin.nombre,
            token

        })

    }
}

adminCtrl.login= async(req,res)=>{
    const{correo, contrasena} = req.body
    const admin = await Admin.findOne({correo:correo})
    if(!admin){
        return res.json({
            mensaje:'El correo ingresado no esta registrado'
        })
    }

    const validacionClave = await bcrypt.compare(contrasena,admin.contrasena);
    if(validacionClave){
        
        const token = jwt.sign({_id: admin._id},'Clave token')
        res.json({
            mensaje:'Has iniciado sesión, !Bienvenido!',
            id:admin._id,
            nombre: admin.nombre,
            token
        })

    }

    else{
        res.json({
            mensaje: '¡Contraseña incorrecta!'
        })
    }
}

module.exports=adminCtrl
