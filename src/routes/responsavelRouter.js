import routerx from 'express-promise-router'
import auth from '../middlewares/auth'
import responsavelController from '../controllers/responsavelController'

const router = routerx()

router.post('/', auth.verifyUsuario, responsavelController.add)
router.put('/activate/:id', auth.verifyUsuario, responsavelController.activate)
router.put('/deactivate/:id', auth.verifyUsuario, responsavelController.deactivate)
router.put('/:id', auth.verifyUsuario, responsavelController.update)
router.get('/ativos', auth.verifyUsuario, responsavelController.listActive)
router.get('/entidades', auth.verifyUsuario, responsavelController.listEntities)
router.get('/pessoas', auth.verifyUsuario, responsavelController.listPersons)
router.get('/busca/:termo', auth.verifyUsuario, responsavelController.search)
router.get('/:id', auth.verifyUsuario, responsavelController.findById)
router.get('/', auth.verifyUsuario, responsavelController.list)

export default router