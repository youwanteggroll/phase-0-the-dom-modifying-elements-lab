// Write your code here!
// index.js

const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);

const name = "Tim"; 
newHeader.innerHTML = `${name} is the champion`;

