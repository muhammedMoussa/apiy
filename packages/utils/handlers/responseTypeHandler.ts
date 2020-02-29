export const responseTypeHandler = (
    xhr: XMLHttpRequest,
    responseType?: any
): XMLHttpRequest => {
    if (responseType && isValidResponseType(responseType)) { xhr.responseType = responseType; }
    return xhr;
}

const isValidResponseType = (responseType: any): boolean => responseType == 'json' || 'text' || 'arraybuffer' || 'blob' || 'document'|| '' ? true : false;