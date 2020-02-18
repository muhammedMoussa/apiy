/* Apiy post function */

import { IOptions } from '../../models';
import {
    onloadHandler,
    optionsValidator,
} from '../../utils';

export const Put = (options: IOptions): Promise<XMLHttpRequestResponseType> => {
    const req: Promise<XMLHttpRequestResponseType> = new Promise( async (resolve, reject) => {
        if (!optionsValidator(options)) { reject('Some Apiy Options Missed!') }
        const xhr = new XMLHttpRequest();
        xhr.responseType = options.responseType || 'json';
        xhr.withCredentials = true;
        await xhr.open(options.method, options.url);
        await xhr.setRequestHeader('Content-Type', 'application/json');
        await xhr.send();
        xhr.onload = async () => {
            try { resolve (await onloadHandler(xhr)); }
            catch (error) { reject (new Error('Whoops!')); }
        }
        xhr.onerror = (): any => reject(new Error('Whoops!'));
    });
    return req;
}