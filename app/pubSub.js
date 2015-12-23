var pubSub = (function() {

  'use strict';

  var subscribers = {};

  return {

    // either return or call a method with data
    publish: function(eventName, data) {
      if (!subscribers[eventName]) {
        return;
      }

      subscribers[eventName].forEach(function(subscriber) {
        subscriber(data);
      });
    },

    // other modules use this, to register a callback
    // which is called when the eventName is published
    subscribe: function(eventName, cb) {
      // create an array or push the cb to existing
      if (!subscribers[eventName]) {
        subscribers[eventName] = [];
      }

      subscribers[eventName].push(cb);
    }
  };

})();

export default pubSub;
