import './styles/_app.css';
import bikes from './constants/bikes.js';
import createSystem from './HireSystem.js';
import createNewBike from './Bike.js';

import createMainView from './views/main.js';
import showBikeList from './views/bikeList.js';

let hireBikeSystem;
let title = 'Hire Bike System';

main();
addConstantBikes();

function main() {

  bootStrapLink();

  hireBikeSystem = createSystem();
  console.log('hire bike syst ', hireBikeSystem);

  setTimeout(() => {
    buildDom();
  }, 500);
}

function buildDom() {
  createMainView(title);
  showBikeList(hireBikeSystem.getBikes());
}

function addConstantBikes() {
  bikes.forEach(bike => {
    hireBikeSystem.addBike(createNewBike(bike));
  });
}

function bootStrapLink() {
  let head = document.head;
  let bootLink = document.createElement('link');
  bootLink.rel = 'stylesheet';
  bootLink.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
  bootLink.crossorigin = 'anonymous';
  head.appendChild(bootLink);
}

hireBikeSystem.getBikes();
hireBikeSystem.getCustomers();
