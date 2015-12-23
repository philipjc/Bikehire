let hireSystem = (function() {
  'use strict';
  
  let instance;

  function init() {

    let bikes = [];

    let customers = [];

    let hires = [];

    function addBikeToSystem(bike) {
      if (!bike) { return }
      bikes.push(bike);
    }

    function addCustomerToSystem(cust) {
      if (!cust) { return }
      customers.push(cust);
    }

    function addHireToSystem(hire) {
      if (!hire) { return }
      hires.push(hire);
    }

    function returnAllBikes() {
      return bikes || [];
    }

    function returnAllCustomers() {
      customers.length
        ? console.log('all customers ', customers)
        : console.log('No customers!');
    }

    function returnAllHires() {
      hires.length
        ? console.log('all hires ', hires)
        : console.log('No hires!');
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
