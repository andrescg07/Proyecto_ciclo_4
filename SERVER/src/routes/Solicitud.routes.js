const {Router} = require('express')
const router = Router()
const SolicitudesCtrl = require('../controller/Solicitud.controller')
const Autorizacion = require('../helpers/Auth')

router.post('/rentar', SolicitudesCtrl.crearSolicitud)
router.get('./listarSolicitudes', SolicitudesCtrl.listar)
router.get('/listar/:id', SolicitudesCtrl.listarId)
router.delete('/eliminar/:id',Autorizacion.verificarToken, SolicitudesCtrl.eliminarSolicitud)
router.put('/actualizar/:id',Autorizacion.verificarToken, SolicitudesCtrl.actualizarSolicitud)
router.get('/listar/:criterio',Autorizacion.verificarToken, SolicitudesCtrl.buscarPorIdentificacion)
router.get('/listarNombre/:id',Autorizacion.verificarToken, SolicitudesCtrl.buscarPorNombre)

module.exports = router