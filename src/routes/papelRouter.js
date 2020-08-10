import routerx from 'express-promise-router'
import auth from '../middlewares/auth'
import papelController from '../controllers/papelController'

const router = routerx()

router.post('/', auth.verifySuper, papelController.add)
router.put('/:id', auth.verifySuper, papelController.update)
router.get('/ativos', auth.verifySuper, papelController.listAtivos)
router.put('/deactivate/:id', auth.verifySuper, papelController.deactivate)
router.put('/activate/:id', auth.verifySuper, papelController.activate)
router.get('/:id', auth.verifyAdmin, papelController.findById)
router.get('/', auth.verifyAdmin, papelController.list)

export default router