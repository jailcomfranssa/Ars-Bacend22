import routerx from 'express-promise-router'
import auth from '../middlewares/auth'
import setorTipoController from '../controllers/setorTipoController'

const router = routerx()

router.post('/', auth.verifySuper, setorTipoController.add) 
router.get('/:id', auth.verifySuper, setorTipoController.findById) 
router.get('/', auth.verifyUsuario, setorTipoController.list) 
router.put('/:id',  auth.verifySuper, setorTipoController.update)

export default router