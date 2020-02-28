export const headersHandler = (
    xhr: XMLHttpRequest,
    headers?: any
): XMLHttpRequest => {
    if (!headers) { return xhr; }
    for (const header in headers) {
        if (headers.hasOwnProperty(header)) {
            xhr.setRequestHeader(header, headers[header]);
        }
    }
    return xhr;
}