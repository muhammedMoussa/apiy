import { apiy_core } from './core/apiy_core';

export const apiyCore = () => {
  const get = (options) => {
    return apiy_core({
      method: 'GET',
      url: options
    });
  }

  const post = (options) => {
    return apiy_core({
      method: 'POST',
      url: options.url,
      body: options.body
    });
  }

  const put = (options) => {
    return apiy_core({
      method: 'PUT',
      url: options.url,
      body: options.body
    });
  }

  const patch = (options) => {
    return apiy_core({
      method: 'PATCH',
      url: options.url,
      body: options.body
    });
  }

  const _delete = (options) => {
    return apiy_core({
      method: 'DELETE',
      url: options
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
