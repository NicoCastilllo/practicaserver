import * as controllerPosteos from '../controllers/controllerPosteos.js'

const routesPosteos = app => {
    app.get('/inicio',controllerPosteos.viewInicio)
    app.get('/posts',controllerPosteos.viewPosts)
    app.post('/posts',controllerPosteos.createPost)
    app.delete('/posts',controllerPosteos.delPost)
    app.put('/posts',controllerPosteos.updatePost)
    app.post('/comentario',controllerPosteos.createComentario)
}
export default routesPosteos