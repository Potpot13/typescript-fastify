import userRoutes from "./userRoutes";

export function routes(fastify:any, options:any, done:any){
    fastify.register(userRoutes, {prefix: "user"})
    done()
}
