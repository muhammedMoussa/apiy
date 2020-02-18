import { IMethods, IOptions } from './models';
import {
    Get,
    Post,
    Put,
    Delete,
    Patch,
    Options
} from './core';

/* main apiy entry */

export class Apiy implements IMethods {
    get(opt: IOptions) { return Get({ method: 'GET', ...opt}); }
    post(opt: IOptions) { return Post({ method: 'POST', ...opt}); }
    put(opt: IOptions) { return Put({ method: 'PUT', ...opt}); }
    patch = (opt: IOptions) => Patch({ method: 'PATCH', ...opt});
    delete = (opt: IOptions) => Delete({ method: 'DELETE', ...opt});
}