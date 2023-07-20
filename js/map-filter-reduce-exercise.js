(() => {
    //MAP
    const url = './data/houses.json';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application.json'
        }
    }
    // ////////////// VANILLA JS WITH JUST FOR OF LOOP
    // fetch(url, options)
    //     .then(response => {
    //         //Response from API made into a JSON
    //         return response.json();
    //     })
    //     //can put data instead of houses = the data we are getting back from this API are HOUSES
    //     .then(houses => {
    //         // logs the response from the API as JSON
    //         console.log(houses);
    //         //working with houses array
    //         const housesTwoBedsPlus = [];
    //         //do not need the index; therefore we can use a for of loop for this example
    //         for (let house of houses) {
    //             const numberOfBeds = parseFloat(house.beds);
    //             if (numberOfBeds >= 2) {
    //                 housesTwoBedsPlus.push(house);
    //             }
    //         }
    //         console.log(housesTwoBedsPlus);
    //
    //     });

    // //////////////FILTER METHOD
    // can declare variables as we go (house out of the array of houses)
    // Filters through the array
    fetch(url, options)
        //gets response from API
        .then(response => {

            //Response from API made into a JSON
            return response.json();
        })

        //can put data instead of houses = the data we are getting back from this API are HOUSES
        .then(houses => {
            //
            // //CHAIN FILTER WITH MAP
            // let housesTwoBedsPlus = houses.filter(house=>{
            //     const numberOfBeds = parseFloat(house.beds);
            //     const numberOfBaths = parseFloat(house.baths);
            //     return numberOfBeds >= 5 && numberOfBaths >= 3;
            // }).map(house=> {
            //     let card = document.createElement('div');
            //     card.innerHTML = `
            //     <h2>${house.address}</h2>`
            //     return card;
            // })
            // for(let house of housesTwoBedsPlus) {
            //     document.querySelector('#houses')
            //         .appendChild(house);
            // }


            // logs the response from the API as JSON
            //working with houses array
            console.log(houses);

            //places array of objects that pass conditions into variable called housesTwoBedsPlus
            const housesTwoBedsPlus = houses.filter(house => {
                //place elements you want to place conditions on into a variable
                const numberOfBeds = parseFloat(house.beds);
                // can chain multiple filter properties
                const numberOfBaths = parseFloat(house.baths);
                return numberOfBeds >= 5 && numberOfBaths >= 2;
            });
            //returns new array with elements(array of objects) that pass the conditions
            console.log(housesTwoBedsPlus);

// ////////////////////MAP METHOD
            //will be new array at the end of map method
            let housesPriceRange = houses.map(house => {
                //underscore will just make number more readable, does not change actual value
                const priceRange = 200_000;
                const canBuy = parseFloat(house.price) > priceRange ? "Nope" : "yup!";
                const newValue = `Address: ${house.address}\nCan I afford it?: ${canBuy}`
                return newValue;
            })
            for (let house of housesPriceRange) {
                console.log(house);
            }

            //prints house addresses onto HTML with MAP METHOD
            let houseNodes = houses.map(house => {
                let card = document.createElement('div');
                card.innerHTML = `
    <h2>${house.address}</h2>
    `
                return card;
            })
            for (let house of houseNodes) {
                document.querySelector('.container').appendChild(house);
            }


            // ////////////REDUCE METHOD
            //     USING REDUCE TO FIND THE PRICIEST HOUSE
            //     .reduce(function parameter, initial value of accumulator)
            const largestPrice = houses.reduce((accumulator, house, index) => {
                let price = parseFloat(house.price);
                if (price > accumulator) {
                    accumulator = price;
                }
                //will produce single result which is the house that is the priciest
                return accumulator;
            }, 0);
            console.log(largestPrice);
            // ///////////////////END OF REDUCE TO FIND MOST EXPENSIVE

            // /////////USING REDUCE TO FIND CHEAPEST HOUSE
            const cheapestPrice = houses.reduce((accumulator, house, index) => {
                let price = parseFloat(house.price);
                if (price < accumulator) {
                    accumulator = price;
                }
                //will produce single result which is the house that is the priciest
                return accumulator;
            }, parseFloat(houses[0].price));
            console.log(cheapestPrice.toLocaleString('en-US', {style: "currency", currency: "USD"}));
                // //////////////////END OF REDUCE TO FIND CHEAPEST HOUSE

            //Can chain all of the conditions within reduce and print into an object
            // How many houses were for sale in 2022?
            //What was the most expensive house?
            // What was the cheapest house?
            // What was the total market value of all houses for sale?

            const dashboardObject = houses.reduce((accumulator, house, index)=>{
                //store the price of the home in a variable
                let price = parseFloat(house.price);
//accumulator will iterate through each house in the houses array
                accumulator.totalHouses++;
//finds most expensive house with conditional statement
                if (price > accumulator.mostExpensive) {
                    accumulator.mostExpensive = price;
                     }
//finds cheapest house with conditional statement
                    if (price < accumulator.cheapestHouse) {
                        accumulator.cheapestHouse = price;
                    }
//finds the total market value of the houses for sale
                    accumulator.totalMarketValue += price;
                    // return the single conclusions that made it through the conditionals
                    return accumulator;
                },
                //declare the accumulator that we are working with
                //in this case we are finding different values for the properties within a new accumulator object.
                {
                totalHouses: 0,
                    mostExpensive: 0,
                    cheapestHouse: parseFloat(houses[0].price),
                    totalMarketValue: 0
            });
            console.log(dashboardObject);
            // //////THIS IS ALL WITHIN THE FETCH PROMISE
        });

})();