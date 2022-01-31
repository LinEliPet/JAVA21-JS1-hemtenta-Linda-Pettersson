//Hämtar id:n
let weather = document.getElementById("current-weather");
let description = document.getElementById("current-description");
let temp = document.getElementById("current-temp");
let wind_spd = document.getElementById("current-wind");
let rh = document.getElementById("current-humidity");
let error = document.getElementById("error-message");

//För att knappen ska fungera
const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', function (event) {
    const input = document.querySelector('input');
    console.log(input.value);

    //KEY
    const KEY = '484f7a0e4f0b4add91db94b3a19cfb17';
    let searchText = input.value;

    //URL: Current weather API
    const weatherUrl = `http://api.weatherbit.io/v2.0/current?city=${searchText}&key=${KEY}`;

        //Hämta weather-url, data
        try {
        fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
        let res = data.data[0];

        description.append("Beskrivning: " + res.weather.description);
        temp.append(res.temp + " °C");
        wind_spd.append(res.wind_spd + " Vindhastighet");
        rh.append(res.rh + " Luftfuktighet");
    });
}
catch {
    error.append(res.error);
}


    //URL: Forecast API
    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchText}&key=${KEY}`;
    console.log(forecastUrl);

    //Pusslar ihop bild-urlen
    //function getImageUrl(imgUrl)

        //URL: Image
        /*
        let imgUrl = `https://www.weatherbit.io/static/img/icons/t01d.png`;
        console.log(imgUrl);
        document.body.append(imgUrl);*/
})
