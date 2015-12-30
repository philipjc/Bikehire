
function success(data) {
  // console.log('Promise result ', data);
  return data;
}

function failure(data) {
  console.log('Promise Error ', data);
}

function _http(url){

  let core = {

    // Method that performs the ajax request
    ajax(method, url, args) {

      // Creating a promise
      let promise = new Promise( function (success, failure) {

        // Instantiates the XMLHttpRequest
        let req = new XMLHttpRequest();

        // IF Payload
        if (args && (method === 'POST' || method === 'PUT')) {
          url += '?';
          let argcount = 0;
          for (let key in args) {
            if (args.hasOwnProperty(key)) {
              if (argcount++) {
                url += '&';
              }
              url += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
            }
          }
        }

        req.open(method, url);
        req.send();

        req.onload = () => {
          if (req.status >= 200 && req.status < 300) {
            success(req.response);

          } else {
            console.log('promise error', req.statusText);
          }
        }
        // Network error
        req.onerror = function () {
          failure(Error(req.statusText));
        }
      })

      // Return the promise
      return promise;
    }
  }

  // Adapter pattern
  return {
    'get' : function(url, args) {
      return core.ajax('GET', url, args);
    },
    'post' : function(url, args) {
      return core.ajax('POST', url, args);
    },
    'put' : function(url, args) {
      return core.ajax('PUT', url, args);
    },
    'delete' : function(url, args) {
      return core.ajax('DELETE', url, args);
    }
  }
}

export default _http;
