//create some buttons to navigate to test sites
const button = document.createElement('button');
const link = 'test1.html'

button.addEventListener('click',window.open(link));

document.body.appendChild(button);