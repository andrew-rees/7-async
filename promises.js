const readline = require("readline-sync")
//const rp = require("request-promise");
const request = require("request");

// let long //I am still struggling with this - how to pass variable around without polluting global scope. Here, I want to bring long and lat from getLongLat into useLongLat, but couldn't.
// let lat //ditto
// function getLongLat (postcode, callbackAPI) {
//     request(`https://api.postcodes.io/postcodes/${postcode}`, function (error, response, body) {
//     //console.log('error:', error);
//     //console.log('statusCode:', response && response.statusCode);
//     let parsedPostcode = JSON.parse(body);
//     long = parsedPostcode.result.longitude
//     lat = parsedPostcode.result.latitude
//     console.log(`Postcode: ${postcode}\nLong: ${parsedPostcode.result.longitude}\nLat: ${parsedPostcode.result.latitude}`);
//     callbackAPI();
//     })
// }
// getLongLat("M16 9PR", function (){ //here I wanted to do a callback within this anonyoous function, but couldn't make it work. in principle can you do this?
//     request(`https://api.postcodes.io/postcodes?lon=${long}&lat=${lat}`, function (error, response, body){
//     //console.log('error:', error);
//     //console.log('statusCode:', response && response.statusCode);
//     let parsedReturn = JSON.parse(body);
//     if (parsedReturn != null) {
//         console.log("it worked")
//     } else {
//         console.log("failed")
//     }
//     //console.log(parsedReturn.result);
//     (!function(){
//             console.log(`Do you feel like you are at long/lat? Y/N`);
//             const doYouFeel = readline.prompt();
//             if (doYouFeel === "Y"){
//                 console.log("phew")
//             } else (
//                 console.log("tough nuts, kiddo")
//             )
//         }())
//     })
// })



// let promise = new Promise(function(resolve, reject) {
//     someAsyncFunction(function callback(data, error) {
//         if (error) { reject(error); }
//         else { resolve(data); }
//     });
// });
 
// promise.then(function success(data) {
//     console.log("Asynchronous function was called and returned some data: " + data);
// }).catch(function (error) {
//     console.log("Something went wrong");
// });


// // an immediately resolved promise
// var p2 = Promise.resolve("foo"); 

// // can get it after the fact, unlike events
// p2.then((res) => console.log(res)); 

// var p = new Promise(function(resolve, reject) {  
//    setTimeout(() => resolve(4), 2000);
// });

// // handler can't change promise, just value
// p.then((res) => {  
//   res += 1;  
//   console.log(res);
// });

// // still gets 4
// p.then((res) => console.log(res));  


// var q = new Promise(function(resolve, reject) { 
//     for (i = 0; i < 3; i++) {
//         if (i > 0) {
//         resolve(console.log(i));  // fulfilled successfully
//     }
//         else {
//         reject();  // error, rejected
//     }
//     }
//  });

// var r = new Promise((resolve, reject) => resolve(5));  
// r.then(function(val){
//     let newVal = val * 5
//     console.log(newVal)
// });

// var p = new Promise((resolve, reject) => resolve(5)); //promise set up with resolve & reject
// //we tell it to resolve right away with a value of 5 
// p.then((val) => console.log(val)); //we then use the value of the promise with .then, and insert it into val variable with an anonymous function

// request(`https://api.postcodes.io/postcodes/M169PR`, function (error, response, body) {
//         //console.log('error:', error);
//         //console.log('statusCode:', response && response.statusCode);
//         let parsedPostcode = JSON.parse(body);
//         long = parsedPostcode.result.longitude
//         lat = parsedPostcode.result.latitude
//         console.log(`Postcode: ${postcode}\nLong: ${parsedPostcode.result.longitude}\nLat: ${parsedPostcode.result.latitude}`);
//         }) 


let promise = new Promise(function(resolve, reject) { //promise starts with a function that has 2 parameters - resolve and reject
    if (Math.round(Math.random()) === 0) { //you can then set what you do on resolve
        setTimeout(() => resolve("done!"), 1000)
    } else { //and what you do on reject
        setTimeout(() => reject("error..."), 1000)
    }
});

promise.then(
    result => console.log(result), //first argument of .then() - receives a result from a resolved promise
    error => console.log(error)  //second argument of .then() - receives an error from a rejected promise
)

 
// promise.then(function success(data) {
//     console.log("Asynchronous function was called and returned some data: " + data);
// }).catch(function (error) {
//     console.log("Something went wrong");
// });