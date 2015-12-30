let hireSystem = (function() {
  'use strict';

  let instance;

  function init() {

    // Bike collection
    let bikes = [];

    // Customer collection
    let customers = [];

    // Hires collection
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

    function returnSingleBike(ref) {
      return bikes.filter(bike => {
        return ref === bike.reference;
      })[0];
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

      findBike(ref) {
        return returnSingleBike(ref);
      }
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

export default function hireSystem() {
  return hireSystem.getInstance();
}
