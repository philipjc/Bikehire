'use strict';
let bikeListCtrl = (() => {

  let leavingListItem = item => {
    item.classList.remove('list-group-item-success', 'list-group-item-danger');
    item.removeEventListener('mouseover');
    item.removeEventListener('mouseout');
  }

  let overListItem = (bikes, item) => {
    console.log(bikes);
    let thisBike = bikes.filter((bike) => {
      return bike.name === item.innerHTML;
    })[0];

    console.log(thisBike);
    thisBike.available
      ? item.classList.add('list-group-item-success')
      : item.classList.add('list-group-item-danger');
  }

  return {

    addBikeListEvent(bikes) {

      let bikeListItems = document.querySelectorAll('.bike-list-item');
      let foreach = Array.prototype.forEach;

      foreach.call(bikeListItems, (item) => {
        item.addEventListener('mouseover', () => {
          overListItem(bikes, item);
        });

        item.addEventListener('mouseout', () => {
          leavingListItem(item);
        });
      });
    }
  }

})();

export default bikeListCtrl;
