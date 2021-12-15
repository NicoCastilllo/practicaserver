import * as controllerUsers from '../controllers/controllerUsers.js'
import * as middlewaresUsers from '../middlewares/middlewaresUsers.js'

const routesUsers = app => {
    app.get('/login',controllerUsers.viewlogin)
    app.post('/login',middlewaresUsers.buyer,controllerUsers.login)
}
export default routesUsers