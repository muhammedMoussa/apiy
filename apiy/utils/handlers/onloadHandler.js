"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onloadHandler = (xhr) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @TODO: UTIL HANDLE THIS, TAKE STATUS ONLY.
        //@TODO: HANDLE RESOLVE PURE OBJECT
        const response = xhr.response;
        return response;
    }
    catch (error) {
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
});
