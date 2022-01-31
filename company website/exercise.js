//declaring const and let, declaring and calling a function

let myName = 'Lana';
const birthYear = 1990;
const greeting = (name) => {
    return `Hello, ${name}!`
}
greeting(myName);

//It is supposed to print an array of numbers from 15 to 30 sharp

const range = () => {
    for(let number = 15; number = 30; number++) {
        let array = [ ];
        let numRange = array.push(number)
        return numRange;
    }
    
}
console.log(range());



