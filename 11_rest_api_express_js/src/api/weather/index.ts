/**
 * Created by antoine on 18/01/2017.
 */
import * as Express from 'express'

export const createRouter = () => {
    const router = Express.Router()

    // GET / returns all books
    router.get('/weather', (request: Express.Request, response: Express.Response) => {
        const randomNumber = Math.floor(Math.random() * 10)
        const flippedCoin = randomNumber % 2 ? 'heads' : 'tails'

        if(flippedCoin === 'heads'){
            response.end('Sunny Weather')
        }else{
            response.end('Raining all day')
        }
    })

    return router
}