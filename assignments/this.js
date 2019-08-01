/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The most basic level of 'this', set by being in an object or at  a global level just by existing
* 2. Implicit Binding - Where the 'this' is bound to an object by '.'
* 3. New Binding - It is used in constructor functions, and is used in helping create new objects based upon it.
* 4. Explicit Binding - 'This' is set to explicit when it is called with a method to change/add/modify a object. aka call, apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function printWord(words)  {
    console.log(this);
    return words;
}

console.log(printWord('hello'));

// Principle 2

// code example for Implicit Binding
const myObj = {
    achievement: 'Slytherin',
    cheer: function(house) {
        console.log(this);
        console.log(`Let's go ${house}! We're going to win the ${this.achievement}`)
    }
};

myObj.cheer('Slytherin');

// Principle 3

// code example for New Binding
function dog(name) {
    this.bark = 'Woof'
    this.name = name;
    this.speak = function() {
        console.log(this);
        console.log(`${this.name} said ${this.bark}`)
    }
}

const ares = new dog('Ares');
const athena = new dog('Athena');

ares.speak()
athena.speak()

// Principle 4

// code example for Explicit Binding

const myInfo = {
    name: 'Sam',
    favorteColor: 'red',
}

const myPets = ['Ares', 'Athena'];

function myInformation(thing1, thing2,) {
    console.log(this);
    return `I'm ${this.name}, my favorite color is ${this.favorteColor}, and please look at these photos of my dogs; ${thing1} and ${thing2}.`
}

console.log(myInformation.apply(myInfo, myPets));