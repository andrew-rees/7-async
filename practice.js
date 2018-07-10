

var brie = ["brie", "medium", "French"]
var camenbert = ["camenbert", "mild", "French"]
var cheddar = ["cheddar", "strong", "British"]
var portSalut = ["portSalut", "mild", "French"]
var tunworth = ["tunworth", "strong", "British"]
var american = ["american", "mild", "American"]
var cheeses = [brie, camenbert, cheddar, portSalut, tunworth, american]

//console.log(cheeses)

//console.log(cheeses.length)

for (i = 0; i < 6; i++) {
    !function (min, max) {
        let a = (Math.floor(Math.random()*(max-min+1)+min));
        }(0,5) 
        console.log(a)


    console.log(cheeses.splice(cheeses.length - 1), cheeses.length)
}
console.log(cheeses)


