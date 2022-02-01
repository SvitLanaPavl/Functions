//writing current day and time
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let now = new Date();
console.log(`Today is: ${days[now.getDay()]}`);
console.log(`Current time is: ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds}`);
