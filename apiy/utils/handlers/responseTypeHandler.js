"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseTypeHandler = (xhr, responseType) => {
    if (responseType && isValidResponseType(responseType)) {
        xhr.responseType = responseType;
    }
    return xhr;
};
const isValidResponseType = (responseType) => responseType == 'json' || 'text' || 'arraybuffer' || 'blob' || 'document' || '' ? true : false;
