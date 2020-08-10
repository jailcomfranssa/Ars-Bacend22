import auth from '../middlewares/auth'
import routerx from 'express-promise-router'
import movimentacaoController from '../controllers/movimentacaoController'

const router = routerx()

router.post('/', /**auth.verifyUsuario,*/ movimentacaoController.add)
router.put('/devolucao/:id',/** auth.verifyUsuario,*/ movimentacaoController.devolucao)
router.get('/',/** auth.verifyUsuario,*/ movimentacaoController.list)
router.get('/tipo/:tipo',/** auth.verifyUsuario,*/ movimentacaoController.listByTipo)
router.get('/setor/:id', /**auth.verifyUsuario,*/ movimentacaoController.listBySetor)
router.get('/emCarga', /**auth.verifyUsuario,*/ movimentacaoController.listEmCarga)
router.get('/emCarga/:id', /**auth.verifyUsuario,*/ movimentacaoController.listEmCargaBySetor)
router.get('/expiradas', /**auth.verifyUsuario,*/ movimentacaoController.listMovimentacoesExpiradas)
router.get('/expiradas/:id', /**auth.verifyUsuario, */movimentacaoController.listMovimentacoesExpiradasBySetor)
router.get('/cargas/expiradas', /**auth.verifyUsuario,*/ movimentacaoController.listCargasExpiradas)
router.get('/cargas/expiradas/:id', /**auth.verifyUsuario,*/ movimentacaoController.listCargasExpiradasBySetor)
router.get('/remessas/pendentes', /**auth.verifyUsuario,*/ movimentacaoController.listRemessasPendentes)
router.get('/remessas/pendentes/:id',/** auth.verifyUsuario,*/ movimentacaoController.listRemessasPendentesBySetor)
router.get('/search/:termo', /**auth.verifyUsuario,*/ movimentacaoController.search)
router.post('/upload/:id', /**auth.verifyUsuario,*/ movimentacaoController.upload)
router.get('/retrieve/:arquivo/:token', movimentacaoController.download)

export default router