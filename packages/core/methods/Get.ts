import { IOptions } from '../../models';
import {
    onloadHandler,
    optionsValidator,
} from '../../utils';

/* Apiy get function */

export const Get = (options: IOptions): Promise<XMLHttpRequestResponseType> => {

    const req: Promise<XMLHttpRequestResponseType> = new Promise( async (resolve, reject) => {
        if (!optionsValidator(options)) { reject('Some Apiy Options Missed!') }

        const xhr = new XMLHttpRequest();

        xhr.responseType = options.responseType || 'json';
        xhr.withCredentials = true;

        await xhr.open(options.method, options.url);
        await xhr.send();

        // @TODO: UTIL THIS TO READ FROM options
        // xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = async () => {
            try { resolve (await onloadHandler(xhr)); }
            catch (error) { reject (new Error('Whoops!')); }
        }

        xhr.onprogress = (event) => { /* @TODO: HANDLE FOR DOWNLOAD CASES. */ };

        xhr.onreadystatechange = (): any => {
            // @TODO: UtIL WITH RXJS
            if (xhr.readyState == 3 || xhr.readyState == 1) {
                options.loading = true;
            }
            if (xhr.readyState == 4) {
                options.loading = false;
            }
        };

        xhr.onerror = (): any => reject(new Error('⛔ Ooops!'));
    });

    return req;
}