/**
 * @param {{ headers: { [x: string]: string; }; }} request
 */
export function getSession(request) {
    return {
        mobile: request.headers['sec-ch-ua-mobile'] === '?1'
    }
}