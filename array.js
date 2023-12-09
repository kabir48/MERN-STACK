//numbers.shift(); //it will remove an element from the first;
//numbers.unshift(99); //it will add an element from the first;

//numbers.push(77); //this will add from the last
//numbers.pop(); //this will remove from the last

const firstNumbers = [10, 20]
const numbers = [...firstNumbers, 23, 34, 20, 45, 60]; //spread operator

console.log(numbers.sort())

const objectArray = {
    name: 'Md. Humayun Kabir',
    age: 34
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let ul = "<ul>";
for (let i = 0; i < fruits.length; i++) {
    ul += "\n" + "<li>" + fruits[i] + " <li> " + "\n";

}
ul += "</ul>";

console.log(ul)


// for (fruit in objectArray) {
//     console.log(objectArray[fruit])
// }// for in object er jonno use hoie

// for (fruit in objectArray) {
//     console.log(objectArray[fruit])
// }// for of arary er joono use hoie

for (fruit of fruits) {
    console.log(fruit)
}

let text = "<select>"
fruits.forEach(myFruits)

text += "</select>"

function myFruits(fruit, i) {
    text += '<option value ="' +
        i + '">' + fruit + "</option>" + "\n"
}

console.log(text);

const fruitsName = ["Banana", "Orange", "Apple", 'Ball', 'Arong'];
console.log(fruitsName.sort()); // sort() method is used to rearrange the value, or string
console.log(numbers.sort())