"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headersHandler = (xhr, headers) => {
    if (!headers) {
        return xhr;
    }
    for (const header in headers) {
        if (headers.hasOwnProperty(header)) {
            xhr.setRequestHeader(header, headers[header]);
        }
    }
    return xhr;
};
