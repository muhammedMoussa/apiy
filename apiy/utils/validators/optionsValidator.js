"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsValidator = (options) => {
    if (!options || !options.url) {
        return false;
    }
    return true;
    // @TODO: EXTEND VALIDATION RULES TO HANDLE body AND query WHEN POST, PUT, DELETE
};
