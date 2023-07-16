"use strict"
$(() => {


/////////////////////     VARIABLES //////////////////////////////////////////////

// open weather link
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    //loads map
    const map = initializeMap();

    //markers created will be stored into variable marker
    const marker = createMarker();

    //popups created will be stored into variable popup
    const popup = createPopup();

    //coordinates for the alamo downtown san antonio
    const ALAMO_COORDINATES = ['29.4260', '-98.4861'];

    //obtains the URL with the alamo coordinates
    const URL = getWeatherURL(...ALAMO_COORDINATES);

    // finds div to print city name
    const grabCityDiv = document.querySelector('#city');

    //find div to print current weather stats
    const grabTodayWeather = document.querySelector('#today-weather');

    //find div to print five-day forecast
    const fiveDayForecast = document.querySelector('#five-day-forecast');

    //creates html element div
    let createDiv = document.createElement("div");

    //creates html element p
    let createParagraph = document.createElement("p");

///////////////////     FUNCTIONS   //////////////////////////////////////////////

    //function that initializes the map to center on codeup (class exercise)
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;
        const mapOptions = {

            //only accepts ID so no need for hashtag
            container: 'map',

            style: 'mapbox://styles/mapbox/streets-v12', //style URL (there are predefined styles)

            zoom: 10, //zoom it starts at

            center: [-98.4912, 29.4252], //starting coordinates at codeup SA
        }
        return new mapboxgl.Map(mapOptions); //created new map object and stored global variable
    }

    // //function to make a marker for codeup (class exercise)
    function createMarker() {

        //function that creates a marker at codeup
        return new mapboxgl.Marker()

            //sets the coords for codeup
            .setLngLat([-98.4912, 29.4252])

            //adds marker to map
            .addTo(map);

    }

    // //function to create a popup for codeup (class exercise)
    function createPopup() {

        //creates popup
        return new mapboxgl.Popup()

            //sets coords at codeup
            .setLngLat([-98.4912, 29.4252])

            //adds html elements to popup and prints content into popup
            .setHTML(`
            <div>
            <h1>Codeup</h1>
            <p> Here is codeup!</p>
            </div>
`);
    }

    //function that takes in coordinates from center of map and prints on the screen the address
    function findAndPrintAddress() {

        //set variable of coords to the center of the map (will grab the coords of the location in the center of the map)
        const coords = map.getCenter();

        //logs coords of the location at the center of the map
        console.log(coords);

        //reverse geocode will find the address of the coords, also takes (coordinates, token) as parameters
        //also needs .then((response)=>{code block of what to do with the response}); like ajax requests
        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {

            //logs the address of the coords
            console.log(data);

            //prints the address between the h1 element tags
            document.querySelector('h1').innerHTML = `${data}`;
        });
    }

    //renders city name in an h1 in div with #city
    function renderDivCity(cityName) {
        grabCityDiv.innerHTML =
            `<h1 class="text-center">${cityName}</h1>`
    };

    //render current weather conditions
    function renderCurrentConditions(currentDateAndTime, currentTemp, feelsLike, weatherDescription, windSpeed) {
        grabTodayWeather.innerHTML =
            `
                <div class="card"
                <div class ="d-flex flex-column justify-center">
                <div class="text-center">Date and Time: ${currentDateAndTime}</div>
                <h1 class="text-center">Current Temperature: ${currentTemp} (F)</h1>
                <div class="text-center">Feels like: ${feelsLike} (F)</div>
                <div class="text-center">${weatherDescription}</div>
                <div class="text-center">Wind: ${windSpeed}</div>
                </div>
             `
    };



// Simple way to create URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }


//logs all the data from the url with the alamo coordinates input
    $.ajax(URL).done(data => {
        console.log(data);
    }).fail(console.error);

//request data from API response and do something with the response
    $.ajax(URL).done(data => {
        //call function to get city name
        renderDivCity(data.city.name);

        //call function to print current weather conditions into #today-weather
        renderCurrentConditions(data.list[0].dt_txt ,data.list[0].main.temp, data.list[0].main.feels_like, data.list[0].weather[0].description, data.list[0].wind.speed);


//logs the weather object for the next three hours
        console.log(data.list[0].main);

        //logs weather for the next 3hours
        console.log(data.list[0].weather[0].main);

    }).fail(console.error);


//finds humidity for five days
    $.ajax(getWeatherURL(...ALAMO_COORDINATES))
        .done((data) => {
            data.list.forEach((day, index) => {
                //for each day (each block goes by 3 hours, 24 hours in a day = 8 blocks)
                if (index % 8 === 0) {
                    console.log(`Humidity: ${day.main.humidity}`);
                    console.log(`${day.main.temp}`);
                    console.log(`${day.main.feels_like}`);
                    let fiveDayHumidity = $(document.createElement('div'))
                        .addClass("card")
                        .text(`Humidity: ${day.main.humidity} %
                        Temperature: ${day.main.temp} (F)
                        Feels Like: ${day.main.feels_like} (F)`)
                        .css({
                        display: 'block',
                        fontSize: '2rem',

                    });
                    $('#five-day-forecast').append(fiveDayHumidity)

                   //  fiveDayForecast.append(`Humidity: ${day.main.humidity}`);
                   // fiveDayForecast.append(`Temperature: ${day.main.temp}`);
                   // fiveDayForecast.append(`Feels Like: ${day.main.feels_like}`)
                 ;
                }
            });

        })
        .fail(console.error);

/////   FUNCTIONS TO find min and max temps
    function returnMinMaxTemps({list}) {
        const minMaxTempDays = [];

        // loops through 40 three hour blocks of forecast and creates a new temperature object for each new day
        list.forEach(({dt_txt, main: {temp_max, temp_min}}) => {
            const [date, time] = dt_txt.split(' '); // splits the date time string
            if (minMaxTempDays.length === 0 || time.startsWith('00')) {
                // add a new forecast day for each new date
                minMaxTempDays.push({date, min: temp_min, max: temp_max});
            } else {
                // replace the current days min and max temps if a higher max or lower min is found throughout the day
                const currentMinMaxTemp = minMaxTempDays[minMaxTempDays.length - 1];
                const {min, max} = currentMinMaxTemp;
                if (min > temp_min) currentMinMaxTemp.min = temp_min;
                if (max < temp_max) currentMinMaxTemp.max = temp_max;
            }
        });

        return minMaxTempDays;
    }

//finds minimum and maximum temps for the next five days and uses above function to log info
    $.ajax(getWeatherURL(...ALAMO_COORDINATES))
        .done(data => {
            const minMaxTemps = returnMinMaxTemps(data);
            minMaxTemps.forEach(minMaxTemp => {
                console.log(minMaxTemp);
            });
        })
        .fail(console.error);

/////////////////       END OF FUNCTIONS to find min and max temps


///////////////////////////    EVENTS      /////////////////////////////////////////////

    //make this query selector use the users click target on the map find the weather for the city closest to the marker
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintAddress)

///////////////     LOAD ASAP      //////////////////////////////
    marker.setPopup(popup);


});