import { IMethods, IOptions } from './models';
import { Get } from './core';

/* main apiy entry */

export class Apiy implements IMethods {
    get(opt: IOptions) { return Get({ method: 'GET', ...opt}); }
    post(opt: IOptions) { return 'post';}
    put(opt: IOptions) { return 'put';}
    patch(opt: IOptions) { return 'patch';}
    delete(opt: IOptions) { return 'delete';}
    options(opt: IOptions) { return 'options';}
}