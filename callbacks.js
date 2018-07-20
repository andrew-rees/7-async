var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const readline = require("readline-sync")
//const rp = require("request-promise");
const request = require("request");

//WORKING CALLBACK//
// start programme
//ask question every second, has parcel arrived?
//parcel arrives after 5 seconds
//once parcel arrives, start next function which asks 'are neighbours in'? This is 50/50 random Y/N
//then, only run isNeighbourIn once parcelArrived = yes


// function parcel(callback) {
//     console.log("Has the parcel arrived?")
//     for (i = 1; i < 4; i++) {
//         if (i < 3) {
//             console.log(`It's ${i}pm - no parcel yet`)
//         } else if (i === 3) {
//             console.log(`It's ${i}pm - the parcel has arrived! But is the neighbour in ...`)
//             callback()
//         }
//     }
// }
// parcel(function () {
//     let randomiser = Math.round(Math.random())
//     if (randomiser === 0) {
//         console.log("No, they are not in...")
//     } else if (randomiser === 1) {
//         console.log("Yes, they are in!")
//     }
// })

//MORE CALLBACKS

// let long //I am still struggling with this - how to pass variable around without polluting global scope. Here, I want to bring long and lat from getLongLat into useLongLat, but couldn't.
// let lat //ditto
function getLongLat (postcode, callbackAPI) {
    request(`https://api.postcodes.io/postcodes/${postcode}`, function (error, response, body) {
    //console.log('error:', error);
    //console.log('statusCode:', response && response.statusCode);
    let parsedPostcode = JSON.parse(body);
    long = parsedPostcode.result.longitude
    lat = parsedPostcode.result.latitude
    console.log(`Postcode: ${postcode}\nLong: ${parsedPostcode.result.longitude}\nLat: ${parsedPostcode.result.latitude}`);
    callbackAPI(long, lat);
    })
}
getLongLat("SK6 6HS", function (long, lat){ //here I wanted to do a callback within this anonyoous function, but couldn't make it work. in principle can you do this?
    request(`https://api.postcodes.io/postcodes?lon=${long}&lat=${lat}`, function (error, response, body){
    //console.log('error:', error);
    //console.log('statusCode:', response && response.statusCode);
    let parsedReturn = JSON.parse(body);
    console.log(parsedReturn.result);
    (!function(){
            console.log(`Do you feel like you are at long/lat? Y/N`);
            const doYouFeel = readline.prompt();
            if (doYouFeel === "Y"){
                console.log("phew")
            } else (
                console.log("tough nuts, kiddo")
            )
        }())
    })
})