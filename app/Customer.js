let Customer = {

  init: function(opt) {
    this.name = opt.name || 'void';
    this.id = opt.id || 0;
  },

  hireBike: function() {

  },

  returnBike: function() {

  }

};

function createNewCustomer(opt) {
  let newCustomer = Object.create(Customer);

  newCustomer.init(opt);

  return newCustomer
}

export default createNewCustomer;
