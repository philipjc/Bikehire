'use strict';
import pubSub from '../pubSub.js';

let bikeListView = (() => {

  return {

    publishListInEvent(bike, element) {
      let data = { bike: bike, dom: element }

      pubSub.publish('bikelistAvailabilityIn', data);
    },

    publishListOutEvent(bike, element) {
      let data = { bike: bike, dom: element }

      pubSub.publish('bikelistAvailabilityOut', data);
    },


    showBikeList(bikes) {

      if (!bikes) { return }

      let middle = document.querySelector('.middle');
      let bikeListContainer = document.createElement('div');
      let heading = document.createElement('p');
      let list = document.createElement('ul');
      let title = 'Bike selection';

      bikeListContainer.classList.add('bikes');
      heading.classList.add('bikes-heading');
      list.classList.add('list-group', 'bike-list');

      heading.innerHTML = title;
      bikeListContainer.appendChild(heading);
      bikeListContainer.appendChild(list);
      middle.appendChild(bikeListContainer);

      let bikeListElement = document.querySelector('.bike-list');

      bikes.forEach(bike => {
        let item = document.createElement('li');
        item.classList.add('list-group-item', 'bike-list-item');
        item.innerHTML = bike.name;
        bikeListElement.appendChild(item);

        bikeListView.applyEvents(bike, item);
      });
    },

    applyEvents(bike, el) {
      
      el.addEventListener('mouseover', () => {
        bikeListView.publishListInEvent(bike, el);
      });

      el.addEventListener('mouseout', () => {
        bikeListView.publishListOutEvent(bike, el);
      });
    }
  }

})();


export default bikeListView
