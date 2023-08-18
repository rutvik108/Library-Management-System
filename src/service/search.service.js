import request from "./request";
const ENDPOINT= "/api/book"

export const Query = async (keyword) => {
    const url = `${ENDPOINT}/search?keyword=${keyword}`;
    return request.get(url).then((res) =>{
        return res;
    });
}