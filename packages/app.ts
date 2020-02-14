import { IMethods } from "./models";

export class Apiy implements IMethods {
    get() { return 'get';}

    post() { return 'post';}

    put() { return 'put';}

    patch() { return 'patch';}

    delete() { return 'delete';}

    options() { return 'options';}
}

const apiy = new Apiy();
console.log(apiy.get());
console.log(apiy.post());
console.log(apiy.put());
console.log(apiy.patch());
console.log(apiy.delete());
console.log(apiy.options());