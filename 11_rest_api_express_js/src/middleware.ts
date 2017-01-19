/**
 * Created by antoine on 19/01/2017.
 */
import * as Express from 'express'
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as morgan from 'morgan'
import * as cookieParser from 'cookie-parser'

const setDefaultHeaders = (request: Express.Request, response: Express.Response, next: Express.NextFunction) => {
    response.header('Access-Control-Allow-Origin', '*')
    next()
}

const requestMaxPayload = '1mb'

const Middleware = {
    init: (app: Express.Application) => {

        app.use(compression())

        app.use(bodyParser.urlencoded({
            extended: false,
            limit: requestMaxPayload
        }))

        app.use(bodyParser.json({
            limit: requestMaxPayload
        }))

        app.use(cookieParser())

        app.use(morgan(':req[x-forwarded-for] - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));
        
        app.use(setDefaultHeaders)
    }
}

export default Middleware