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
        // return promis((resolve, reject) => {
        //     xhr.onload = () => {
        //         // @TODO: UTIL HANDLE THIS, TAKE STATUS ONLY.
        //         if (xhr.status != 200) {
        //             reject(new Error("Whoops!"));
        //         } else {
        //             //@TODO: HANDLE RESOLVE PURE OBJECT
        //             const response = xhr.response;
        //             resolve(response);
        //         }
        //     };
        // })
}