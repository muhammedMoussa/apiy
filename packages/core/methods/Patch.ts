/* Apiy post function */

import { IOptions } from '../../models';
import {
    onloadHandler,
    optionsValidator,
    headersHandler
} from '../../utils';
import { openXhr } from '../../shared';

export const Patch = (options: IOptions): Promise<XMLHttpRequestResponseType> => {
    const req: Promise<XMLHttpRequestResponseType> = new Promise( async (resolve, reject) => {
        if (!optionsValidator(options)) { reject('Some Apiy Options Missed!') }
        const xhr = new XMLHttpRequest();
        debugger
        xhr.responseType = options.responseType || 'json';
        xhr.withCredentials = true;
        await openXhr(xhr, options);
        await headersHandler(xhr, options.headers);
        await xhr.send();
        xhr.onload = async () => {
            try { resolve (await onloadHandler(xhr)); }
            catch (error) { reject (new Error('Whoops!')); }
        }
        xhr.onerror = (): any => reject(new Error('Whoops!'));
    });
    return req;
}