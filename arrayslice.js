let arraySlice = [1, 2, 3, 4, 5];
let array_one = typeof(arraySlice[0]);
let array_two = arraySlice.slice(1, 3);
console.log(array_two);

function kabir(...a) {
    console.log(a.length);
    let sum = 0;
    for (let i of a) {
        sum += i;

    }

    console.log(sum)

}

kabir(1, 2, 3);


const add = function(x, y) {
    return x + y;
    //console.log(sum)
};

console.log(add(10, 20))

const traditionalFunction = function() {
    console.log(arguments);
};


function arrowFunction(...numbers) {
    console.log(numbers);
    let sumAdd = 0;
    for (let i of numbers) {
        sumAdd += i;
    }

    console.log(sumAdd);
}


arrowFunction(1, 2, 2, 4, 5);


const arrowSum = (x, y) => x + y;


console.log(arrowSum(30, 40))