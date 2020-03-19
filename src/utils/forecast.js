const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/537ae3d4ac1e21b2e5aec3cca95298c1/' + latitude + ',' + longitude
    console.log(url);
    

    request({ url, json:true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.daily.data[0].summary + ' It is currentlty ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + ' % chance of rain.')
        }
    })

}

module.exports = forecast