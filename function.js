//function declation
function sum() {
    console.log(2 + 4)
}
sum();

//dynamic function  note:cant call arguments upward of the function
var sumOfNumbers = function(x, y) {
    return x + y; //in return only exacuate the given value and under it no other function cant work
}

console.log(sumOfNumbers(20, 40));

//Function Expression
//note : arguments of the function can be shifted any where.
function twoNumbers(a, b) {
    return a + b
}
console.log(twoNumbers(20, 30));

//Rest Parameter===


function restParameter(...a) {
    let sumNumber = 0;
    for (number of a) {
        sumNumber += number
    }
    console.log(a);
    console.log(sumNumber);

}
restParameter(20, 30, 40, 50, 60);


var data = new Date();
var hours = 40

console.log(data.toDateString())
console.log(data.getHours())
console.log('Hello World')
