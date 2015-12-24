'use strict';
import pubSub from '../pubSub.js';

let bikeListCtrl = (() => {

  let subscriptionIn, subscriptionOut;

  subscriptionIn = pubSub.subscribe('bikelistAvailabilityIn', function checkAvailabilityIn(data) {
    console.log('from bike ctrl, bikelist in was published with, ', data);
    // unsub using data??
    overListItem(data.bike, data.dom);
    // subscriptionIn.dispose();
  });

  subscriptionOut = pubSub.subscribe('bikelistAvailabilityOut', function checkAvailabilityOut(data) {
    console.log('from bike ctrl, bikelist was out published with, ', data);
    // unsub using data??
    leavingListItem(data);
    // subscriptionOut.dispose();
  });

  let leavingListItem = data => {
    data.dom.classList.remove('list-group-item-success', 'list-group-item-danger');
    data.dom.removeEventListener('mouseover');
    data.dom.removeEventListener('mouseout');
  }

  let overListItem = (bike, el) => {

    bike.available
      ? el.classList.add('list-group-item-success')
      : el.classList.add('list-group-item-danger');
  }

  return {


  }

})();

export default bikeListCtrl;
