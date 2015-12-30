'use strict';
import './styles/_app.css';

import _http from './Prom.js';
import pubSub from './pubSub.js';
import bootStrapLink from './utils.js';

import hireSystem from './HireSystem.js';
import createNewBike from './Bike.js';

import createMainView from './views/main.js';
import bikeListView from './views/bikeList.js';

import bikeListCtrl from './controller/bikeListCtrl.js';

let hireBikeSystem;
let title = 'Hire Bike System';

main();


function main() {

  bootStrapLink();

  hireBikeSystem = hireSystem();
  console.log('hire bike syst ', hireBikeSystem);

  getBikeData();

  setTimeout(() => {
    buildDom();
  }, 500);
}

console.log('PS ', pubSub.seeSubscribers());

function getBikeData() {
  // _http.get(./constants/bikes.json);
  let http = _http();

  http
  .get('./app/constants/bikes.json')
  .then(function(res) {
    populateBikeDB(res);
  });
}

function populateBikeDB(data) {
  let bikeData = JSON.parse(data);

  for (let prop in bikeData) {
    bikeData[prop].forEach(bike => {
      hireBikeSystem.addBike(bike);
    });
  }
}

function buildDom() {
  createMainView(title);
  bikeListView.renderBikeList(hireBikeSystem.getBikes());
}



hireBikeSystem.getBikes();
hireBikeSystem.getCustomers();
