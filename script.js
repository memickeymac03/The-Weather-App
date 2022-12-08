const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '33bcd95765msh1c836828ab16524p15f6e4jsn56cbc29e7786',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            //sunrise.innerHTML = response.sunrise
            //sunset.innerHTML = response.sunset
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            temp.innerHTML = response.temp

        })

        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        dl1.innerHTML = response.temp
        dl2.innerHTML = response.feels_like
        dl3.innerHTML = response.max_temp
        dl4.innerHTML = response.min_temp
        dl5.innerHTML = response.humidity

    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        ny1.innerHTML = response.temp
        ny2.innerHTML = response.feels_like
        ny3.innerHTML = response.max_temp
        ny4.innerHTML = response.min_temp
        ny5.innerHTML = response.humidity

    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ottawa', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        ot1.innerHTML = response.temp
        ot2.innerHTML = response.feels_like
        ot3.innerHTML = response.max_temp
        ot4.innerHTML = response.min_temp
        ot5.innerHTML = response.humidity
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Beijing', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        bj1.innerHTML = response.temp
        bj2.innerHTML = response.feels_like
        bj3.innerHTML = response.max_temp
        bj4.innerHTML = response.min_temp
        bj5.innerHTML = response.humidity
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Moscow', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        mc1.innerHTML = response.temp
        mc2.innerHTML = response.feels_like
        mc3.innerHTML = response.max_temp
        mc4.innerHTML = response.min_temp
        mc5.innerHTML = response.humidity

    })
    .catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        ld1.innerHTML = response.temp
        ld2.innerHTML = response.feels_like
        ld3.innerHTML = response.max_temp
        ld4.innerHTML = response.min_temp
        ld5.innerHTML = response.humidity
    })
    .catch(err => console.error(err));