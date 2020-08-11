import auth from "../middlewares/auth";
import routerx from "express-promise-router";
import correspodenciaController from "../controllers/correspodenciaController";

const router = routerx();

export default router;

router.post("/", /**auth.verifyUsuario,*/ correspodenciaController.add);
router.get("/", /** auth.verifyUsuario,*/ correspodenciaController.list);
router.get("/search/:termo",/**auth.verifyUsuario,*/ correspodenciaController.search);
router.post("/upload/:id",/**auth.verifyUsuario,*/ correspodenciaController.upload);

export default router;
