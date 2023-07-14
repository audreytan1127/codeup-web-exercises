$(() => {

    //Global Variables
////////////////////////////////////////////////////////////////////
    const map = initializeMap();

    const marker = faveRestaurantMark();

    const popup = createPopup();

    const restaurants = [

        {
            address: "403 Pearl Parkway, San Antonio, TX 78215",
            name: "Allora",
            coordinates: [-98.47813628853349, 29.44312324114152],
            description: "Audrey's favorite Italian restaurant follows the theme of coastal Italian cuisine with a highlight in their handmade pastas, so tasty you want to bathe in it pesto butter, as well as fresh, lightly treated seafood selection that makes you want overfish and cause fish underpopulation."
        },
        {
            address: "1003 Barton Springs Rd, Austin, TX 78704",
            name: "Terry Black's BBQ, Austin",
            coordinates: [-97.7651588795538, 30.303016472238625],
            description: "Audrey's favorite BBQ spot so far. Beautifully marbleized brisket, juicy beef ribs, greatly seasoned and sauce pork ribs, and homemade sides that make you glad you were born. And also. Banana Pudding. mic drop."
        },
        {
            address: "69 7th Ave S, New York, NY 10014",
            name: "Bleecker St. Pizza, New York",
            coordinates: [-74.00134355329895, 40.73750987800546],
            description: "Audrey's favorite spot for New York Pizza in New York. Deliciously crisp pizza crust with just the right amount of wood-fired char goodness with a zesty marinara underneath a generous layer of fresh mozzarella cheese, a good shlug of olive oil and herbaceous torn basil, to make a beautiful margherita pizza slice for the best $4 you ever spent."

        },
    ]

/////////////////////////////////////////////////////////////////////////
    //Functions

    //creates map to startup mapbox API by placing token into mapbox
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;
        //declare variable to put all the map options into
        const mapOptions = {
            // place it in the map container,
            container: 'map',
            //sets the style of the map,
            style: 'mapbox://styles/mapbox/streets-v12',
            //sets the zoom to overview city of tokyo,
            zoom: 15,
            // and centers the map on the favorite restaurant in tokyo
            center: [139.6993810400078, 35.66062020114777],
        }
        // returns new map with map options
        return new mapboxgl.Map(mapOptions);
    }

    //create function to make favorite restaurant marker on initialization
    function faveRestaurantMark() {
        //returns the map with a marker on it
        return new mapboxgl.Marker()
            //sets the marker position on map with coordinates
            .setLngLat([139.6993810400078, 35.66062020114777])
            //adds the marker onto map
            .addTo(map);
    }

    //creates function to make favorite restaurant popup on initialization
    function createPopup() {
        //returns the map with popup on it
        return new mapboxgl.Popup()
            //sets the popup on a specific position through the coordinates for tokyo restaurant
            .setLngLat([139.69937032643114, 35.660550445221965])
            //adds HTML elements and content into the popup
            .setHTML(`
            <div>
            <h1> Takeda Hormone Shibuya </h1>
            <p>Audrey's favorite restaurant in the world. Yakiniku style, with a personal grill and vodka sour tap embedded in the table.</p>
            </div>
            `);
    }

//
    function favoriteRestaurants(restaurants, map) {
        restaurants.forEach((restaurant) => {
            markRestaurants(restaurant, map);
        });
    }

    function markRestaurants(restaurant, map) {
        geocode(restaurant.coordinates, MAPBOX_TOKEN)
            .then((data) => {
                console.log(data)
                    map.setZoom(3)
                    .setCenter(data);
                const favoriteRestaurantsPopup = new mapboxgl.Popup()
                    .setHTML(`
                        <h2>${restaurant.name}</h2>
                        <p>${restaurant.description}</p>
                        <h3>${restaurant.address}</h3>
                        `);
                const favoriteRestaurantsMarker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map)
                    .setPopup(favoriteRestaurantsPopup);

            });
    }

///////////////////////////////////////////////////////////
    //Events
    document.querySelector('#favorite-restaurants').addEventListener('click', ()=>{favoriteRestaurants(restaurants, map)});

//////////////////////////////////////////////////////////////////////
    //Runs when program loads
    map.setZoom(10);
    marker.setPopup(popup);


});