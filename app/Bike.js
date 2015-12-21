let Bike = {

  init: function(opt) {
    this.reference = opt.reference || 'void';
    this.name = opt.name || 'basic bike';
    this.price = opt.price || 20;
    this.available = true;
  },

  beHired: function() {

  },

  beReturned: function() {

  }

};

function createNewBike(opt) {
  let newBike = Object.create(Bike);

  newBike.init(opt);

  return newBike
}

export default createNewBike;
