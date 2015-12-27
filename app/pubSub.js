var pubSub = (function() {

  'use strict';

  let subscribers = {};

  return {

    // either return or call a method with data
    publish(eventName, data) {
      if (!subscribers[eventName]) {
        return;
      }

      // pushing callbacks into the array on the property {eventName}
      subscribers[eventName].forEach(function(subscriber) {
        subscriber(data);
      });
    },

    // other modules use this, to register a callback
    // which is called when the eventName is published
    subscribe(eventName, cb) {

      let index;
      // create an array or push the cb to existing
      if (!subscribers[eventName]) {
        subscribers[eventName] = [];
      }

      // fincd the index of the subscribed callback to prep for dispose
      index = subscribers[eventName].push(cb) -1;
      // subscribers[eventName].push(cb);

      // return an oject when app subscribes, allowing unsubscription
      return {
        dispose() {
          subscribers[eventName].splice(index, 1);
        }
      }
    },

    seeSubscribers() {
      return subscribers;
    }
  };

})();

export default pubSub;
