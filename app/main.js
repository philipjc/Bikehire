'use strict';
import './styles/_app.css';

import pubSub from './pubSub.js';
import bootStrapLink from './utils.js';
import bikes from './constants/bikes.js';

import createSystem from './HireSystem.js';
import createNewBike from './Bike.js';

import createMainView from './views/main.js';
import bikeListView from './views/bikeList.js';

import bikeListCtrl from './controller/bikeListCtrl.js';

let hireBikeSystem;
let title = 'Hire Bike System';

main();


function main() {

  bootStrapLink();

  hireBikeSystem = createSystem();
  console.log('hire bike syst ', hireBikeSystem);

  setTimeout(() => {
    buildDom();
  }, 500);
}

console.log('PS ', pubSub.seeSubscribers());

function buildDom() {
  createMainView(title);
  bikeListView.showBikeList(hireBikeSystem.getBikes());

  addUIEvents();
}

function addUIEvents() {
  // bikeListCtrl.addBikeListEvent(hireBikeSystem.getBikes());
  // bikeListView.publishListEvents();
}





hireBikeSystem.addBike(createNewBike({ name: 'Specialised Bigtime', reference: 'bn7411', price: 30 , available: false }))
hireBikeSystem.addBike(createNewBike({ name: 'Specialised Rockhop', reference: 'bn7423', price: 25 , available: true }))
hireBikeSystem.addBike(createNewBike({ name: 'Trek Y', reference: 'bn7454', price: 30 , available: false }))
hireBikeSystem.addBike(createNewBike({ name: 'Orange 888', reference: 'bn7499', price: 25 , available: true }))

hireBikeSystem.getBikes();
hireBikeSystem.getCustomers();
