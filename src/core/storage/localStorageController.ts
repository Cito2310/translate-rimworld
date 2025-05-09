type keyLocalStorage = "current-project"

export const localStorageController = {
    get(key: keyLocalStorage) {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    
    set(key: keyLocalStorage, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    
    remove(key: keyLocalStorage) {
        localStorage.removeItem(key);
    },
}