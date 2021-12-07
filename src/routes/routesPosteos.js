import * as controllerPosteos from '../controllers/controllerPosteos.js'

const routesPosteos = app => {
    app.get('/inicio',controllerPosteos.viewInicio)
    app.get('/usuario',controllerPosteos.viewUser)
    app.post('/usuario',controllerPosteos.createPost)
    app.delete('/usuario',controllerPosteos.delPost)
    app.put('/usuario',controllerPosteos.updatePost)
    app.post('/comentario',controllerPosteos.createComentario)
}
export default routesPosteos