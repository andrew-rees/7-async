const readline = require("readline-sync")
//const rp = require("request-promise");
const request = require("request");



// 2 SIMPLE PROMISES

let promise1 = new Promise(function(resolve, reject) { //promise starts with a function that has 2 parameters - resolve and reject
    if (Math.round(Math.random()) === 0) { //you can then set what you do on resolve
        setTimeout(() => resolve("promise1 done!"), 1000)
    } else { //and what you do on reject
        setTimeout(() => reject("promise1 error..."), 1000)
    }
});

promise1.then(
    result => console.log(result), //first argument of .then() - receives a result from a resolved promise
    error => console.log(error)  //second argument of .then() - receives an error from a rejected promise
)

let promise2 = new Promise(function(resolve, reject){
    setTimeout(() => resolve("promise2 done!")),
    setTimeout(() => reject("promise2 error!"))
});

promise2.then(
    result => console.log(result),
    error => console.log(error)
)

promise1.catch(function (error){
    console.log("promise1 was caught")
})

promise2.catch(function (error){
    console.log("promise2 was caught")
})

//Results - 50% of the time terminal will show:
// promise2 done!
// promise1 done!

// //the other 50% it will show:
// promise2 done!
// promise1 error...
// promise1 was caught


//PROMISE.ALL

let promise3 = new Promise(function(resolve, reject) { //promise starts with a function that has 2 parameters - resolve and reject
    if (Math.round(Math.random()) === 0) { //you can then set what you do on resolve
        setTimeout(() => resolve("promise3 done!"), 1000)
    } else { //and what you do on reject
        setTimeout(() => reject("promise3 error..."), 1000)
    }
});

let promise4 = new Promise(function(resolve, reject){
    setTimeout(() => resolve("promise4 done!")),
    setTimeout(() => reject("promise4 error!"))
});

Promise.all([promise3, promise4])
       .then(
        result => console.log(result[0], result[1]),
        error => console.log(`error for promise3: ${error [0]}, error for promise4: ${error[1]}`)  
       )
       .catch(function (error){
        console.log("promise3 was caught")
    })

//Promise.all with real example

let promise5 = new Promise(function(resolve, reject){
    request(`https://api.postcodes.io/postcodes/M169PR`, function (error, response, body) {
            //console.log('error:', error);
            //console.log('statusCode:', response && response.statusCode);
            let parsedPostcode = JSON.parse(body);
            long = parsedPostcode.result.longitude
            lat = parsedPostcode.result.latitude
            console.log(`Postcode: ${postcode}\nLong: ${parsedPostcode.result.longitude}\nLat: ${parsedPostcode.result.latitude}`);
            }) 
     
})

promise5.then(
    result => console.log(result),
    error => console.log(error)
)