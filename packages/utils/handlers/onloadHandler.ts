export const onloadHandler = async (
        xhr: XMLHttpRequest
    ) => {
        try {
            // @TODO: UTIL HANDLE THIS, TAKE STATUS ONLY.
            //@TODO: HANDLE RESOLVE PURE OBJECT
            const response = xhr.response;
            return response;
        } catch (error) {
            return error;
        }
}