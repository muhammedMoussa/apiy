import { apiy_core } from './core/apiy_core';

export const apiyCore = () => {
  const get = (options) => {
    return apiy_core({
      method: 'GET',
      url: options.url,
      headers: options.headers
    });
  }

  const post = (options) => {
    return apiy_core({
      method: 'POST',
      url: options.url,
      body: options.body,
      headers: options.headers
    });
  }

  const put = (options) => {
    return apiy_core({
      method: 'PUT',
      url: options.url,
      body: options.body,
      headers: options.headers
    });
  }

  const patch = (options) => {
    return apiy_core({
      method: 'PATCH',
      url: options.url,
      body: options.body,
      headers: options.headers
    });
  }

  const _delete = (options) => {
    return apiy_core({
      method: 'DELETE',
      url: options,
      headers: options.headers
    });
  }

  return {
    get,
    post,
    put,
    patch,
    delete: _delete
  };
}
