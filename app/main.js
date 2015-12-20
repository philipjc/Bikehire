import './style/_app.css';
import bikes from './constants/bikes.js';
import createSystem from './HireSystem.js';
import createNewBike from './Bike.js';

let hireBikeSystem;

main();
addConstantBikes();

function main() {
  hireBikeSystem = createSystem();
  console.log('hire bike syst ', hireBikeSystem);
}

function addConstantBikes() {
  bikes.forEach(bike => {
    hireBikeSystem.addBike(createNewBike(bike));
  });
}

hireBikeSystem.getBikes();
