import routerx from 'express-promise-router'
import auth from '../middlewares/auth'
import processoController from '../controllers/processoController'

const router = routerx()

router.post('/', auth.verifyUsuario, processoController.add)
router.put('/activate/:id', auth.verifyUsuario, processoController.activate)
router.put('/deactivate/:id', auth.verifyUsuario, processoController.deactivate)
router.put('/:id', auth.verifyUsuario, processoController.update)
router.get('/ativos', auth.verifyUsuario, processoController.listActive)
router.get('/emMovimentacao', auth.verifyUsuario, processoController.listEmMovimentacao)
router.get('/setor/:id', auth.verifyUsuario, processoController.listBySetor)
router.get('/busca/:termo', auth.verifyUsuario, processoController.search)
router.get('/:id', auth.verifyUsuario, processoController.findById)
router.get('/', auth.verifyUsuario, processoController.list)
router.put('/status/:id', auth.verifyUsuario, processoController.updateStatus)

export default router