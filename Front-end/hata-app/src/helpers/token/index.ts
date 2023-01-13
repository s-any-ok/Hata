import { LocalStorageConstants } from "../../common/constants/local-storage";

export class TokenHelper {
    static saveToken(token: string) {
        localStorage.setItem(LocalStorageConstants.ACCESS_TOKEN, token);
    }
    static getToken() {
        localStorage.getItem(LocalStorageConstants.ACCESS_TOKEN);
    }
    static removeToken() {
        localStorage.removeItem(LocalStorageConstants.ACCESS_TOKEN);
    }
    static checkOnExists() {
        return !!localStorage.getItem(LocalStorageConstants.ACCESS_TOKEN);
    }
}
