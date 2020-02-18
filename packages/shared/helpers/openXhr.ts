import { IOptions } from "../../models";

export const openXhr = (xhr: XMLHttpRequest, opt: IOptions): void => xhr.open(opt.method, opt.url);