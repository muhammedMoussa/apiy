//  /*
//     apiy function that takes options param
//     to handle request on it..
// */
// /* @TODO:
//     - CUSTOME FUNCTIONS TO EVERY REQUEST..
//     - VALIDATE OPTIONS OBJECT, METHODS, HEADERS..
//     - MOVE HELPERS FUNCTIONS OUT..
//     - SMART HEADERS SETTING..
//     - HANDLE CALLBACKS FUNCTIONS ONLOAD && ONERROR..
// */


export const apiy = (options) => {
    if(!options.responseType
        || (options.responseType && !isValidResponseType(options.responseType))
    ) {
        options.responseType = 'json'
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, options.url);

      xhr.responseType = options.responseType;

      if (options.body) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };

      xhr.onerror = () => {
        reject('Something went wrong!');
      };

      xhr.send(JSON.stringify(options.data));
    });
};

const isValidResponseType = type => ['', 'text', 'arraybuffer', 'blob', 'document', 'json'].includes(type);