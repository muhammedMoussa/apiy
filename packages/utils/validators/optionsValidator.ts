import { IOptions } from '../../models';

export const optionsValidator = (options: IOptions): boolean => {
    if (!options || !options.url) { return false; }
    return true
    // @TODO: EXTEND VALIDATION RULES TO HANDLE body AND query WHEN POST, PUT, DELETE
}