import { Router } from "express"
import { getPublics, getPublic, createPublic } from "./public.controller.js"
import { validateCreatePublic } from "../middlewares/public-validators.js"

const router = Router()

router.get("/ListarPublicaciones", getPublics)
router.get("/Publicacion/:uid", getPublic)
router.post("/CrearPublicacion", validateCreatePublic, createPublic)

export default router