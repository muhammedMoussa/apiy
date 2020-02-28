/* request options model */
// @TODO: COMPLETE REQUEST OPTIONS

export interface IOptions {
    method?: any;
    url: string;
    body?: any;
    responseType?: 'json' | 'text' | 'arraybuffer' | 'blob' | 'document'| '';
    headers: object;
    loading?: boolean;
    allowCors: boolean;
}
