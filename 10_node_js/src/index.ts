/**
 * Created by antoine on 22/12/2016.
 */
import * as q from 'q'
import * as http from 'http'

const makeHTTPRequest = (options: any) => {
    const deferred = q.defer()

    http.request(options, (response: any) => {
        var str = ''

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', (chunk: any) => {
            str += chunk;
        })

        //the whole response has been recieved, so we just print it out here
        response.on('end', () => {
            deferred.resolve(str)
        })

        response.on('abort', () => {
            deferred.reject(new Error('HTTP request aborted by client'))
        })

        response.on('aborted', () => {
            deferred.reject(new Error('HTTP request aborted by server'))
        })
    }).end();

    return deferred.promise
}

const Son = {
    getWeather: () => {
        // Creer un deferred pour gerer la promise
        const deferred = q.defer()

        // Appel async a un webservice meteo
        makeHTTPRequest({host: 'codeberry.fr', path: '/weather'}).then((response: any) => {

            if(response === 'Sunny Weather'){
                // La meteo est bonne, on utilise le deferred pour resolve la promise
                deferred.resolve({status: 'good'})
            }else{
                // La meteo est mauvaise, on utilise le deferred pour resolve la promise
                deferred.resolve({status: 'bad'})
            }

        }).catch(() => {

            // erreur HTTP on utilise le deferred pour reject la promise
            deferred.reject(new Error('Sorry dad, couldnt check the weather'))

        })

        return deferred.promise
    }
}

const prepareDinner = () => {
    console.log('Yum Yum!')
}

const prepareFishingTrip = () => {
    console.log("Let's go fishiiiiiiiiing!")
}

const makePromiseWithSon = () => {

    // Cette fonction retourne une promise
    Son.getWeather()
        // callback lorsque la promise est resolved
        .then((weatherForecast: any) => {

            if(weatherForecast.status === 'good'){
                prepareFishingTrip()
            }else{
                prepareDinner()
            }
        })
        // callback lorque la promise est rejected
        .catch(() => {
            prepareDinner()
        })
}

makePromiseWithSon()