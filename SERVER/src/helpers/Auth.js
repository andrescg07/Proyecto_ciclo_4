const Autorizacion={}
const jwt = require('jsonwebtoken')
const { token } = require('morgan')

Autorizacion.verificarToken = (req,res, next)=>{
   
   if(!req.headers.autorizacion){
        return res.json({
            mensaje: '¡No posee autorizacion o permisos!'
        })
   }

   const tokenNulo= req.headers.autorizacion
   if(tokenNulo === null){
       res.json({
           mensaje: '¡No esta autorizado!'
       })
   }

   jwt.verify(token, 'Codigo seguridad',(error,resultado)=>{
       if(error){
           return res.json({
               mensaje:'¡No estas autorizado!'
           })
       }
   })

   next();

}

module.exports = Autorizacion