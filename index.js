var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const readline = require("readline-sync")
//const rp = require("request-promise");
const request = require("request");


// // function resolveAfter2Seconds() {
// //     return new Promise(resolve => {
// //       setTimeout(() => {
// //         resolve('resolved');

// //       }, 2000);
// //     });
// //   }

// //   async function asyncCall() {
// //     console.log('calling');
// //     var result = await resolveAfter2Seconds();
// //     console.log(result);
// //     // expected output: "resolved"
// //   }

// //   asyncCall();

//   function chooseAfter2Seconds() {
//       return new Promise(resolve => {
//         console.log('success')
//       }, reject => {
//         console.log('error')
//       })
//   }



// async function asyncWait() {
//     chooseAfter2Seconds()
//     console.log("before call");

//     //console.log(chooseAfter2Seconds())

// }

// asyncWait()
// var request = new XMLHttpRequest();
// request.onreadystatechange = function() {
//     if (request.readyState === 4 && request.status === 200) {
//         // console.log(request.readyState);
//         // console.log(request.status);
//         // console.log(request.responseType);
//         var parsedResponse = JSON.parse(request.responseText)
//         console.log(parsedResponse);
//         console.log("Response received:");
//         console.log(request.response);
//     }
// };
// request.open("GET", "https://api.postcodes.io/postcodes/M169PR", true);         
// request.send(null);
// console.log("Request sent");
// console.log("Response not yet available!");

//not async

// var request2 = new XMLHttpRequest();
// request2.open("GET", "https://api.postcodes.io/postcodes/M169PR", false); // false for synchronous request
// request2.send(null); // ... waiting ...
// console.log("Request sent");
// console.log("Response available!");
// // console.log(request2.response);

// //callback function

// console.log('Please enter your fave cheese: ')
// let cheeseInput = readline.prompt()

// function a (){
//     return cheeseInput
// }
// //console.log(a())

// console.log('Please enter your favourite cracker: ')
// let crackerInput = readline.prompt()

// function b(){
//     return crackerInput
// }
// console.log(a() + b())


// function greeting(name) {
//     alert('Hello ' + name);
//   }

//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }

//   processUserInput(greeting);


/// start programme?
//ask question every second, has parcel arrived?
//parcel arrives after 5 seconds
//once parcel arrives, start next function which asks 'are neighbours in'? This is 50/50 random Y/N
//then, only run isNeighbourIn once parcelArrived = yes

//WWORKING CALLBACK

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


// function doHomework(subject, callback) { //first function pops an alert about starting homework. The 2nd parameter is 'callback'
//     alert(`Starting my ${subject} homework.`);
//     callback(); //callback is mentioned here
// }
// doHomework("maths", function(){// then, when you call doHomework, you provide the subject parameter, and also the callback parameter, which is a function in itself
//   alert('Finished my homework');
// });


// !function(message) { // the ! tell the engine this is anonymous
//     console.log(`Hello from ${message}`);
// }("IIFE"); //the calling happen immediately due to the ()
// //outputs 'hello from IIF'



// function second(callback){
//     // Simulate a code delay
//     setTimeout(function(){
//       console.log(2);
//     }, 5000);
//     callback();
//   }
//second(function (){
//     console.log(1)
// });


//another callback

// function a(callbackb, callbackc) {
//     setTimeout(function () {
//         console.log("a")
//         callbackb()
//         callbackc()
//     }, 1000)
// }
// a(function () {
//     console.log("b")
// }, function (){
//     console.log("c")
// })

let long //I am still struggling with this - how to pass variable around without polluting global scope. Here, I want to bring long and lat from getLongLat into useLongLat, but couldn't.
let lat //ditto
function getLongLat (postcode, callbackAPI) {
    request(`https://api.postcodes.io/postcodes/${postcode}`, function (error, response, body) {
    //console.log('error:', error);
    //console.log('statusCode:', response && response.statusCode);
    let parsedPostcode = JSON.parse(body);
    long = parsedPostcode.result.longitude
    lat = parsedPostcode.result.latitude
    console.log(`Postcode: ${postcode}\nLong: ${parsedPostcode.result.longitude}\nLat: ${parsedPostcode.result.latitude}`);
    callbackAPI();
    })
}
getLongLat("M16 9PR", function (){ //here I wanted to do a callback within this anonyoous function, but couldn't make it work. in principle can you do this?
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

// function useLongLat (pcLong, pcLat) {
//     request(`https://api.postcodes.io/postcodes?lon=${pcLong}&lat=${pcLat}`, function (error, response, body){
//     console.log('error:', error);
//     console.log('statusCode:', response && response.statusCode);
//     let parsedReturn = JSON.parse(body);
//     console.log(parsedReturn.result);
//     })
// }
// useLongLat("-2.268935", "53.460004")



// function(){
//     console.log(`Do you feel like you are that long? Y/N`);
//     const doYouFeel = readline.prompt();
//     if (doYouFeel === "Y"){
//         console.log("phew")
//     } else (
//         console.log("tough nuts, kiddo")
//     )
// }