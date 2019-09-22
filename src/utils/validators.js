const isValidResponseType = type => ['', 'text', 'arraybuffer', 'blob', 'document', 'json'].includes(type);

export { isValidResponseType };