import * as controllerFavs from '../controllers/controllersFavs.js'

const routesFavs = app => {
    app.get('/favoritos',controllerFavs.viewFavs)
    app.post('/favoritos',controllerFavs.createFav)
    app.delete('/favoritos',controllerFavs.delFav)
}

export default routesFavs