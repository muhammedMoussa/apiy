import isValidResponseType from '../utils/validators';

const apiy_core = (options) => {
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
        if (xhr.status === 204) {
            resolve(xhr.status);
        } else if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };

      xhr.onerror = () => {
        reject('Something went wrong!');
      };

      xhr.send(JSON.stringify(options.body));
    });
}

export { apiy_core };