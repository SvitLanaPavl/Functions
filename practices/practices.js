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
    
}

function clear () {

    string = '';
    result = '';
   
};
console.log(clear());


