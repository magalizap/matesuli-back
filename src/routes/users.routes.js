import { Router } from "express";
import { changeRol, uploads, validateToken } from "../controllers/users.controllers.js";
import uploader from "../utils/uploader.js";



const userRouter = Router()

 
userRouter.get('/login', (req, res) => {
    res.render('login', {style: 'login.css'})
})

userRouter.get('/signup', (req, res) => {
    res.render('signup', {style: 'login.css'})
})

// RESTABLECER CONTRASEÑA
userRouter.get('/restore', (req, res) => {
    res.render('restore', {style: 'login.css'})
})

userRouter.get('/restorePass/:tokenPass', validateToken)

// ROLES DE USUARIO
userRouter.put('/premium/:uid', changeRol)

// SUBIDA DE ARCHIVOS
userRouter.post('/:uid/documents', uploader.array('document', 3), uploads)


export default userRouter