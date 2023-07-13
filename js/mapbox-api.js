$(() => {

    //Global Variables
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();


    //Functions
    //function that initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;
        const mapOptions = {
            //only accepts ID
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12', //style URL (there are predefined styles)
            zoom: 10, //zoom it starts at
            center: [-98.4912, 29.4252], //starting coordinates
        }
        return new mapboxgl.Map(mapOptions); //created new map object and stored global variable
    }

    //function to make a marker
    function createMarker() {
        //function that creates a marker at codeup
        return new mapboxgl.Marker()
            .setLngLat([-98.4912, 29.4252])
            .addTo(map);

    }

//function to create a popup
    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4912, 29.4252])
            .setHTML(`
            <div>
            <h1>Codeup</h1>
            <p> Here is codeup!</p>
            </div>
`);
    }

//function that brings me to Paris
    function goToParis() {
        geocode('Paris', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }


    //function that takes in coordinates from center of maop and prints on the screen the address
    function findAndPrintAddress() {
        const coords = map.getCenter();
        console.log(coords);
        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
            console.log(data);
            document.querySelector('h1').innerHTML = `${data}`;
        });
    }

    //function that uses geocode tot that the string 'the alamo, san antonio to mark the alamo
    //get coords to set a marker and popup at that location
    function markAlamo() {
        geocode('The Alamo, San Antonio', MAPBOX_TOKEN).then((data) => {
            const alamoPopup = new mapboxgl.Popup()
                .setHTML(`<p>Remember the Alamo</p>`);
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopup);
            alamoPopup.addTo(map);
        });
    }


    //Events
    document.querySelector('#geocode-button').addEventListener('click', goToParis);
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintAddress)
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo);


    //Runs when program loads
    map.setZoom(10);
    marker.setPopup(popup);


});