"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHandler = (xhr, allowCors) => {
    xhr.withCredentials = allowCors || false;
    return xhr;
};
