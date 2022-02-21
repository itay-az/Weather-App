const request = require('request')

const url =  'http://api.weatherstack.com/current?access_key=fde8aed846761e9c2ee2570a82ae668f&query=Tel%20Aviv&units=m'

// request({url: url}, (error,response) => {
//     const data = JSON.parse(response.body)
//     const feelslike = data.current.feelslike
//     const current = data.current.temperature
//     console.log('The tmperature in Tel aviv is currently:' + current + ', it feels like ' + feelslike)
//     console.log(`the city name is ${data.location.name}`)
// })

// request(url,(error,response) => {
//     const data = JSON.parse(response.body)
//     if(error) {
//         console.log('check your internet connection')
//     }
//     else if(data.error) {
//         console.log('cant find location')
//     }
//     else {
//         console.log('the current temp is: ' + data.current.temperature + ' and it feels like: ' + data.current.feelslike)
//     }
// })

const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaXRheWF6b3VsYXkiLCJhIjoiY2t2djdlZzAyMDFyZTJ1b2U0bW5qampwcCJ9.sgJTO0JuxywEgoOg6isFAQ'
request(mapboxUrl,(error,response) => {
    const data = JSON.parse(response.body)
    console.log('the coordinate are: ' + data.features[0].center[0] + ' and: ' + data.features[0].center[1])

})

