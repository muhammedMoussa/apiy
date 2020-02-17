/* request options model */
// @TODO: COMPLETE REQUEST OPTIONS

export interface IOptions {
    method?: any;
    url: string;
    body?: any;
    responseType?: 'json' | 'text' | 'arraybuffer' | 'blob' | 'document'| '';
    loading?: boolean;
}