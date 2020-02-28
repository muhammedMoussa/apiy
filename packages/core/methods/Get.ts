/* Apiy get function */

import { IOptions } from '../../models';
import {
    onloadHandler,
    optionsValidator,
    headersHandler,
    responseTypeHandler,
    corsHandler
} from '../../utils';
import { openXhr } from '../../shared';

export const Get = (options: IOptions): Promise<XMLHttpRequestResponseType> => {

    const req: Promise<XMLHttpRequestResponseType> = new Promise( async (resolve, reject) => {
        if (!optionsValidator(options)) { reject('Some Apiy Options Missed!') }

        const xhr = new XMLHttpRequest();

        await corsHandler(xhr, options.allowCors);
        await responseTypeHandler(xhr, options.responseType);
        await openXhr(xhr, options);
        await headersHandler(xhr, options.headers);
        await xhr.send();

        xhr.onload = async () => {
            try { resolve (await onloadHandler(xhr)); }
            catch (error) { reject (new Error('Whoops!')); }
        }

        xhr.onprogress = (event: any) => { /* @TODO: HANDLE FOR DOWNLOAD CASES. */ };

        xhr.onreadystatechange = (): any => {
            // @TODO: UtIL WITH RXJS
            if (xhr.readyState == 3 || xhr.readyState == 1) {
                options.loading = true;
            }
            if (xhr.readyState == 4) {
                options.loading = false;
            }
        };

        xhr.onerror = (err): any => reject(err);
    });

    return req;
}