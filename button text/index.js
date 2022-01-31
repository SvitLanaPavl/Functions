

const modifyGreeting = () => {
    const greeting = document.getElementsByTagName('h1');
    const greetingColor = document.querySelector('h1');
    if (greeting.innerHTML === 'Good morning!') {
        greeting.innerHTML = 'Good afternoon!';
        greetingColor.style.color = 'orange';
    }
    else {
        greeting.innerHTML = 'Good evening!';
        greetingColor.style.color = 'darkblue';
    }

}
console.log(modifyGreeting);

const clicking = document.getElementById('click-me');
clicking.addEventListener('click', modifyGreeting);


const nameInput = () => {
     const inputText = document.getElementById('text').value;
     const nameValue = document.getElementById('name-input');
     nameValue.innerText = inputText;
}
console.log(nameInput);

const enter = document.getElementById('enter');
enter.addEventListener('click', nameInput);
