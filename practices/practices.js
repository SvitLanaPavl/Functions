//writing current day and time
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const now = new Date();
console.log(`Today is: ${days[now.getDay()]}`);
let hour = now.getHours();
let minute = now.getMinutes();
let seconds = now.getSeconds();
let prepand = (hour >= 12)? 'PM' : 'AM';
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === 'PM') {
    if (minute === 0 && senond === 0) {
        hour = 12;
        prepand = 'Noon';
    }
    else {
        hour = 12;
        prepand = 'PM';
    }
}

if (hour === 0 && prepand === 'AM') {
    if (minute === 0 && second === 0) {
hour = 12;
prepand = 'Midnight';
    }
    else {
        hour = 12;
        prepand = 'AM';
    }
}

console.log(`Current time is: ${hour} ${prepand} : ${minute} : ${seconds}.`);

//printing the contents of the current window
const printTheCurrentPage = () => {
    window.print();
}

//getting the current date
let dd = now.getDate();
dd = (dd < 10) ? '0' + dd : dd;
let mm = now.getMonth();
mm = (mm < 10) ? '0' + mm : mm;
let date = `${now.getFullYear()}-${mm}-${dd}`;
document.getElementById('curdate').innerHTML = date;
console.log(date);

//finding the area of a triangle
function getArea () {
    let side1 = document.getElementById('side1').value;
    let side2 = document.getElementById('side2').value;
    let side3 = document.getElementById('side3').value;
    let sides = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(sides * ((sides-side1) * (sides-side2) * (sides-side3)));
    document.getElementById('display').innerHTML = area;
    
}

//rotating the string and removing letters

let string = document.getElementById('inputEl');
let result = document.getElementById('stringResult');

function animateString () {

let text = string.value;
 setInterval (function() {
        text = text[text.length-1] + text.substring(0, text.length - 1);
result.innerHTML = text; 
    }, 1000);
   
};

/*const clear = () => {
    
    clearInterval(stringOutput);
    }
    clear();*/  //not sure how I can clear the previously input value and the animated string

//Finding the leap year 
    const leapYear = () => {
        let year = document.getElementById('year');
        let lyear = document. getElementById('lonyear');
        if (year.value % 4 === 0) {
            if (year.value % 100 !== 0) {
                return lyear.innerHTML = 'It\'s a leap year';
            }
            return lyear.innerHTML = 'It\'s a leap year'; 
        }
        else {
            return lyear.innerHTML = 'It\'s not a leap year';
        }
    }
    
// Find whether January 1 is a Sunday in the years 2014 - 2050

for (let year = 2014; year <= 2050; year ++) {
    let d = new Date (year, 0, 1); //year, month index, day
    if (d.getDay() === 0) {
        console.log(`January 1 is Sunday in the year ${year}.`)
    }
}

//number guess game
const guessGame = () => {
    let randNum = Math.ceil(Math.random()*10);
    let userNum = document.getElementById('number');
    let output = document.getElementById('output');
    if (randNum === userNum.value) {
        output.innerHTML = 'Good work!'
    }
    else {
        output.innerHTML = `Sorry! Not matched! The number was ${randNum}`
    }
}

//calculating days left until next Christmas

const daysLeft = () => {
let chmas = new Date(now.getFullYear(), 11, 25);
if (now.getMonth() === 11 && now.getDate()>25) {
    chmas.setFullYear(chmas.getFullYear()+1)
}
let oneDay = 1000*60*60*24;
console.log(Math.ceil((chmas.getTime() - now.getTime())/(oneDay)) + ' days left until Christmas!');
}

console.log(daysLeft())

//multiplication and division of two numbers
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const res = document.getElementById('res');

const multiply = () => {
const mult = num1.value * num2.value;
res.innerHTML = mult;
}

const divide = () => {
const div = num1.value / num2.value;
res.innerHTML = div;
}

