import routerx from 'express-promise-router'
import auth from '../middlewares/auth'
import processoClasseController from '../controllers/processoClasseController'

const router = routerx()

router.post('/', auth.verifyAdmin, processoClasseController.add)
router.put('/activate/:id', auth.verifyAdmin, processoClasseController.activate)
router.put('/deactivate/:id', auth.verifyAdmin, processoClasseController.deactivate)
router.put('/:id', auth.verifyAdmin, processoClasseController.update)
router.get('/ativos', auth.verifyUsuario, processoClasseController.listActive)
router.get('/busca/:termo', auth.verifyUsuario, processoClasseController.search)
router.get('/:id', auth.verifyAdmin, processoClasseController.findById)
router.get('/', auth.verifyUsuario, processoClasseController.list)

export default router