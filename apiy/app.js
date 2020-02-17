"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
/* main apiy entry */
class Apiy {
    get(opt) { return core_1.Get(Object.assign({ method: 'GET' }, opt)); }
    post(opt) { return 'post'; }
    put(opt) { return 'put'; }
    patch(opt) { return 'patch'; }
    delete(opt) { return 'delete'; }
    options(opt) { return 'options'; }
}
exports.Apiy = Apiy;
