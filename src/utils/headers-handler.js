// HEADERS HANDLER.
const headersHandler = (headers, xhr = new XMLHttpRequest()) => {
    if (!headers) { return };
    for (const header in headers) {
        if(header) {
            xhr.setRequestHeader(`${header}`, `${headers[header]}`);
        }
    }
}

export { headersHandler };