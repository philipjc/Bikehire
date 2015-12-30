'use strict';
let Bike = {

  init(opt) {
    // console.log(opt);
    this.reference = opt.reference || 'void';
    this.name = opt.name || 'basic bike';
    this.price = opt.price || 20;
    this.available = opt.available;
  },

  beHired() {

  },

  beReturned() {

  },

  availability() {
    return this.available;
  }

};

function createNewBike(opt) {
  let newBike = Object.create(Bike);

  newBike.init(opt);

  return newBike
}

export default createNewBike;
