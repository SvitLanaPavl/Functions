
//returning a greeting
let myName = 'Lana';
const birthYear = 1990;
const greeting = (name) => {
    return `Hello, ${name}!`
}
greeting(myName);


//returning an array of numbers from 15 to 30
let array = [];
const range = (num1, num2) => {
    for(let i = num1; i = num2; number++) {
        return array.push(i)
    }
    return array
}
range(15,30);

//returning odd numbers from 15 to 30
let arr = [];
const oddNum = (num1, num2) => {
    for (let i = num1; i < num2; i++) {
if (i % 2 !== 0) {
    return arr.push(i)
}
return arr;
    }
}

oddNum(15,30);

//calculating the average
const average = (a, b) => {
    return a + b / average.length
}

const square = x => {
    return x * x;
}

const cube = x => {
    return x * x * x;
}

const calculate = () => {
    const arr = [];
    for (let i = 0; i< 9; i++) {
        const x = average(square(i), cube(i));
        arr.push(x);
    }
    return arr
}
calculate();

//objects tasks
const fn = () => {
    const obj1 = {
        name: 'Marcus'
    }
    let obj2 = {
        name: 'Marcus'
    }

    obj1.name = 'Aurelius';
    obj2.name = 'Aurelius';
    obj2 = {
        name: 'Marcus Aurelius'
    };
};
module.exports = { fn };

    const createUser = (name, city) => ({
        name, city
    })
module.exports = { createUser }

//Implement phone book
const object = [{ name: 'Jack', phone: '+380673270887' },
{name: 'Sarah', phone: '+380637856876'}];
const findPhoneByName = (name) => {
    for (const obj of object) {
        if(obj.name === name) {
            return obj.phone;
        }
    }
};
module.exports = { object, findPhoneByName};

//Implementing function containing local variable with hoisting

const hoistingFnc = (name) => {
    let name;
  return `Hello ${name}!`  
}
hoistingFnc('Jack');

//Working with the object

let array = [true, 'hello', 5, 12, -200, false, false, 'word'];
let object = { number: 0, string: 0, boolean: 0 };
const counting = (element) => {
const push = {};
for (let iterable of element) {
    const type = typeof iterable;
    const count = push[type];
    push[type] = count + 1;
}
return push;
}
counting(array);
