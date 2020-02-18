"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
/* main apiy entry */
class Apiy {
    constructor() {
        this.delete = (opt) => core_1.Delete(Object.assign({ method: 'DELETE' }, opt));
    }
    get(opt) { return core_1.Get(Object.assign({ method: 'GET' }, opt)); }
    post(opt) { return core_1.Post(Object.assign({ method: 'POST' }, opt)); }
    put(opt) { return core_1.Put(Object.assign({ method: 'PUT' }, opt)); }
    patch(opt) { return 'patch'; }
    options(opt) { return 'options'; }
}
exports.Apiy = Apiy;
