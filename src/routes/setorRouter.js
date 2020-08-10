import routerx from 'express-promise-router'
import auth from '../middlewares/auth'
import setorController from '../controllers/setorController'

const router = routerx()


router.post('/', auth.verifySuper, setorController.add) 
router.get('/ativos', auth.verifySuper, setorController.listActive)
router.get('/:id', auth.verifyUsuario, setorController.findById) 
router.get('/', auth.verifyUsuario, setorController.list) 
router.put('/:id', auth.verifySuper, setorController.update)
router.put('/activate/:id', auth.verifySuper, setorController.activate)
router.put('/deactivate/:id', auth.verifySuper, setorController.deactivate)




export default router