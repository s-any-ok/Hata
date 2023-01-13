export class LocalStorageHelper {
  static save(key: string, data: string) {
    localStorage.setItem(key, data);
  }
  static get(key: string) {
    localStorage.getItem(key);
  }
  static remove(key: string) {
    localStorage.removeItem(key);
  }
  static checkOnExists(key: string) {
    return !!localStorage.getItem(key);
  }
  static clear() {
    return localStorage.clear();
  }
}
