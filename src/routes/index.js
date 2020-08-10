import routerx from 'express-promise-router'

import papelRouter from './papelRouter'
import setorTipoRouter from './setorTipoRouter'
import setorRouter from './setorRouter'
import usuarioRouter from './usuarioRouter'
import processoClasseRouter from './processoClasseRouter'
import processoRouter from './processoRouter'
import responsavelRouter from './responsavelRouter'
import movimentacaoRouter from './movimentacaoRouter'

const router = routerx()

router.use('/papeis', papelRouter)
router.use('/tipos', setorTipoRouter)
router.use('/setores', setorRouter)
router.use('/usuarios', usuarioRouter)
router.use('/classes', processoClasseRouter)
router.use('/processos', processoRouter)
router.use('/responsaveis', responsavelRouter)
router.use('/movimentacoes', movimentacaoRouter)

export { router }