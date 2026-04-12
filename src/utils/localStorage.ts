export const storage = {
    set: <T>(key: string, value: T) => {
        return localStorage.setItem(key, JSON.stringify(value));
    },

    get: (key: string) => {
        const item = localStorage.getItem(key);

        if (item === null) return null;

        return JSON.parse(item);
    },

    remove: (key: string) => {
        localStorage.removeItem(key);
    },
};
