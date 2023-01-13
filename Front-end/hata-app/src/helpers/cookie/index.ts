import Cookies from "js-cookie";

interface ISetCookie {
    name: string,
    value: any
    expires: number,
}
export class CookieHelper {
    static setCookie({ name, value, expires = 30 }: ISetCookie) {
        Cookies.set(name, value, { expires, path: "" });
    }
    static getCookie(name: string) {
        return Cookies.get(name)
    }
    static isExists(name: string): boolean {
        return !!Cookies.get(name)
    }
    static clean(name: string) {
        return Cookies.remove(name)
    }
}
