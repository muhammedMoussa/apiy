import { IOptions } from "./Options";

export interface IMethods {
    get(options: IOptions): void,
    post(options: IOptions): void,
    put(options: IOptions): void,
    patch(options: IOptions): void,
    delete(options: IOptions): void,
    options(options: IOptions): void
}
