let hireSystem = (function() {

  let instance;

  function init() {

    let bikes = [];

    let customers = [];

    let hires = [];

    function addBikeToSystem(bike) {
      bikes.push(bike);
    }

    function addCustomerToSystem(cust) {
      customers.push(cust);
    }

    function addHireToSystem(hire) {
      hires.push(hire);
    }

    function returnAllBikes() {
      console.log('all bikes ', bikes);
    }

    function returnAllCustomers() {
      console.log('all customers ', customers);
    }

    function returnAllHires() {
      console.log('all hires ', hires);
    }

    // System Object
    return {

      addBike(bike) {
        addBikeToSystem(bike);
      },

      addCustomer(cust) {
        addCustomerToSystem(cust);
      },

      addHire(hire) {
        addHireToSystem(hire);
      },

      getBikes() {
        return returnAllBikes();
      },

      getCustomers() {
        return returnAllCustomers();
      },

      getHires() {
        return returnAllHires();
      },
    }
  }

  // IIFE return
  return {

    getInstance() {

      if ( !instance ) {
        instance = init();
      }

      return instance;
    }
  }

})();

export default function createSystem() {
  return hireSystem.getInstance();
}
