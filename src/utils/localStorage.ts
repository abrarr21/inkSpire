export const setLocalStorage = <T>(key: string, value: T) => {
    return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};

export const removeLocalStorage = (key: string) => {
    return localStorage.removeItem(key);
};

export const save = (value: string) => {
    return JSON.parse(value);
};
