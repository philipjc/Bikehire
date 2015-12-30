'use strict';
import pubSub from '../pubSub.js';
import hireSystem from '../HireSystem.js';

let bikeListView = ((hireSystem) => {

  return {

    publishListInEvent(bike, element) {
      let data = { bike: bike, dom: element }

      pubSub.publish('bikelistAvailabilityIn', data);
    },

    publishListOutEvent(bike, element) {
      let data = { bike: bike, dom: element }

      pubSub.publish('bikelistAvailabilityOut', data);
    },

    applyEvents() {
      // Event delegate list
      let list = document.querySelector('.bike-list');

      list.addEventListener('mouseover', (e) => {
        if (e.target && e.target.nodeName === 'LI') {
          let ref = e.target.dataset.bikeref;
          let bike = hireSystem.findBike(ref);

          // Prepare the mouseout event
          list.addEventListener('mouseout', (e) => {
            bikeListView.publishListOutEvent(bike, e.target);
          });

          bikeListView.publishListInEvent(bike, e.target);
        }
      });
    },

    renderBikeList(bikes) {

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

      // Make li element for each bike object.
      bikes.forEach(bike => {
        let item = document.createElement('li');
        item.classList.add('list-group-item', 'bike-list-item');
        item.dataset.bikeref = bike.reference;
        item.innerHTML = bike.name;
        bikeListElement.appendChild(item);
      });

      bikeListView.applyEvents();
    }
  }

})(hireSystem());


export default bikeListView
