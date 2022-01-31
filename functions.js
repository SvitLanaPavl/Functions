//returning a random number
const random = (min, max) => {
    let min = 0;
    return Math.floor(Math.random () * (max - min + 1));
    
}
random (7);

//returning a string of random symbols
const generateKey = (length, characters) => {
    let result = '';
    for (let i=0; i = length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const characters = 'jhfkjh6kjjdtk54';
const key = generateKey(5, characters);
console.log(key);

