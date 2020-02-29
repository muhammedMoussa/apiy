export const corsHandler = (
    xhr: XMLHttpRequest,
    allowCors?: boolean
): XMLHttpRequest => {
    xhr.withCredentials = allowCors || false;
    return xhr;
}