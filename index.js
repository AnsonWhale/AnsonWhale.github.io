//create some buttons to navigate to test sites
const testButton = document.createElement('button');
const link = 'test1.html';

testButton.innerHTML = 'Test 1';
testButton.addEventListener('click', openTest );

document.body.appendChild(testButton);

function openTest(){
    window.open(link)
}