"use strict";
/* Apiy post function */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.Put = (options) => {
    const req = new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (!utils_1.optionsValidator(options)) {
            reject('Some Apiy Options Missed!');
        }
        const xhr = new XMLHttpRequest();
        xhr.responseType = options.responseType || 'json';
        xhr.withCredentials = true;
        yield xhr.open(options.method, options.url);
        yield xhr.setRequestHeader('Content-Type', 'application/json');
        yield xhr.send();
        xhr.onload = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                resolve(yield utils_1.onloadHandler(xhr));
            }
            catch (error) {
                reject(new Error('Whoops!'));
            }
        });
        xhr.onerror = () => reject(new Error('Whoops!'));
    }));
    return req;
};
