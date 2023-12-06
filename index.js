// console.log('Hello World')
console.log('I love Bangladeh');


// var name = "Humayun kabir";

// name = "Alvi❤  "
// console.log(name);
// var numberAge = 40;
// console.log(name.concat(numberAge));


//time tables
let numberArr = 10;
for (let i = 1; i <= numberArr; i++) {

    for (let y = 1; y <= numberArr; y++) {

        if (i * y % 2 != 0) {
            continue
        }
        console.log(`${i} x ${y} = ${i*y}`)
    }



    // var multipleNumber = i * i;
    // if (i % 2 == 0) {
    //     continue
    // }
    // console.log(`The Odd Numbers Are: ${i}.${multipleNumber}`)
}



let backtickString = `The result is n ${3 + 5}.`;

console.log(backtickString)
    //increment ordecerement

var a = 10;
a++
++a
--a

a += 10
console.log(a)

var aN = 10;
var bN = 20;
var cN = 30

if (aN > bN && aN < bN) {
    console.log(`${aN}  is greater`)
} else if (cN > aN && aN < cN && cN > bN && bN < cN) {
    console.log(`${cN}  is greater`)
} else {
    console.log('All number small')
}
var num = 20;


var fruitName = ['Apple', 'Mango', 'jackfruit'];

for (var i = 0; i < fruitName.length; i++) {

    //console.log(fruitName.slice(0, 2))
}

//fruitName.push(num); //jodi new kono array te value add kori tokon push use korte hoie;

//console.log(fruitName);
//fruitName.pop(1)

//console.log(fruitName.pop(1));

//console.log(fruitName.indexOf(20))

// var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// //newArr.slice(3);
// var sliceArr = newArr.slice(3);
// console.log(newArr);
// console.log(sliceArr)


// var newProduct = newArr.slice(0, 2); // slice diya array thkek value remove kora hoie;
// console.log(newProduct)
// console.log(newArr)

var passMark = 40;
var aPlus = 80;
var aMinus = 70;
var bPlus = 60;
var cPlus = 50;
var objName = {
    name: ['kamal', 'jamal', 'tamim', 'Abir', 'Mofij', 'sazal'],
    marks: ['30', '80', '79', '50', '34', '65'],
    marksB: ['30', '80', '79', '50', '34', '65'],
    marksE: ['30', '80', '79', '50', '34', '65'],


}

for (var i = 0; i < objName.name.length; i++) {
    var totalMarks = parseInt(objName.marksB[i]) + parseInt(objName.marksE[i]) + parseInt(objName.marks[i]);
    var avgMarks = totalMarks / 3;
    console.log('Marks =', avgMarks)
    var gPA = null;
    if (objName.marks[i] >= aPlus && aPlus <= 100) {
        gPA = "A+";
    } else if (aPlus > objName.marks[i] && aMinus < objName.marks[i]) {
        gPA = "A-";
    } else if (aMinus > objName.marks[i] && bPlus < objName.marks[i]) {
        gPA = "B+";
    } else if (bPlus > objName.marks[i] && passMark < objName.marks[i]) {
        gPA = "C+";
    } else {
        gPA = "F";
    }

    console.log(`Student Name : ${objName.name[i].toUpperCase()} , Scored: ${objName.marks[i]} and GPA ${gPA} `)
}

var arr = [1, 2, 3, 4, 5];
console.log(1 in arr)
console.log(2 in arr)
console.log(3 in arr)
console.log(4 in arr)

//console.log(objName.name[2])


/// spread operator
let poorCountry = ['Bangladesh', 'Srilanka'];

let richCountry = [...poorCountry, 'China', 'USA'];

richCountry.push(poorCountry)

console.log(`the countries are : ${richCountry}`);

// var sliceArr = newArr.slice(4);
// console.log(sliceArr)
// console.log(newArr);




//rest parameter
function manyValues(...numbers) {
    let sum = 0;
    for (i of numbers) {
        sum = sum + i;
    }

    console.log(sum)
}
var newArr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(typeof(newArr))
    // let demo = `${newArr}`
manyValues(1, 2, 3, 4, 5, 6, 7, 8, 8);


var namme = function(numbers) {
    return numbers;
}

console.log(namme(newArr.length - 1));


let text = '<ul class="bangladesh">';
let fruitNames = ['Apple', 'Mango', 'Jack-fruit', 'Banana'];
fruitNames.forEach(getFruitName);

text += '</ul>'


function getFruitName(value) {
    text += '<li>' + value + "</li>" + "</br>";
}
console.log(text);
let date = new Date();


console.log(date.toLocaleString());
const persons = {
    fname: "Md.Humayun",
    lname: "Kabir",

    fullName: function() {
        return this.fname + "  " + this.lname;
    }
}

console.log(persons.fullName())

//object  and for in loop======//

var products = {
    shirt: {
        Name: "Bamboo Cotton",
        color: "white,red",
        price: '1250',
        type: 'new'
    },
    panjabi: {
        Name: "Indian regular",
        color: "black,violet",
        price: "2000"
    },
    pants: {
        Name: "Indian regular",
        color: "black,violet",
        price: "2000",
        type: 'new'
    }
}

let sum = 0;
for (let pro in products) {
    console.log(`Product Name :${pro.toUpperCase()}`);
    for (let inPro in products[pro]) {
        prodValue = inPro.toLocaleLowerCase() + " = " + products[pro][inPro];
        console.log(`${prodValue}`)

    }

    //console.log(`${pro}   ${prodValue}`)
}