import { IMethods, IOptions } from './models';
import {
    Get,
    Post,
    Put,
    Delete,
    Patch
} from './core';

/* main apiy entry */

export class Apiy implements IMethods {
    get = (opt: IOptions) => Get({ method: 'GET', ...opt});
    post = (opt: IOptions) => Post({ method: 'POST', ...opt});
    put = (opt: IOptions) => Put({ method: 'PUT', ...opt});
    patch = (opt: IOptions) => Patch({ method: 'PATCH', ...opt});
    delete = (opt: IOptions) => Delete({ method: 'DELETE', ...opt});
}