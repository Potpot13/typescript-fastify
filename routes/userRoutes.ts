import { userController } from '../controllers/userController'
const user = new userController()

function userRoutes(fastify:any, options:any, done:any){
    fastify.get("/portal", user.login)
    done()
}

export default userRoutes