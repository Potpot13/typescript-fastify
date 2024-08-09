import fastify from "fastify"
import { routes } from "./routes/routes"


const server = fastify()

server.register(routes)
const start = async()=>{
    await server.listen(
        {
            port: 5000,
            host: "0.0.0.0"
        },
        (err)=>{
            if(err) return err
            console.log("Server Listing on PORT..... 5000")
        }
    )
}

start()