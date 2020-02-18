import { IMethods, IOptions } from './models';
import { Get, Post } from './core';

/* main apiy entry */

export class Apiy implements IMethods {
    get(opt: IOptions) { return Get({ method: 'GET', ...opt}); }
    post(opt: IOptions) { return Post({ method: 'POST', ...opt}); }
    put(opt: IOptions) { return 'put';}
    patch(opt: IOptions) { return 'patch';}
    delete(opt: IOptions) { return 'delete';}
    options(opt: IOptions) { return 'options';}
}