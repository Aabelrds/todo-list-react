class Storage {
    constructor(storage) {
        this.storage = storage || localStorage;
    }

    get(key) {
        return JSON.parse(this.storage.getItem(key)) || [];
    }

    set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    setItem(key, value) {
        const elements = this.get(key);
        elements.push(value);
        this.set(key, elements);
    }

    filter(key, filter) {
        return this.get(key).filter(el => el[Object.keys(filter)[0]] === Object.values(filter)[0])
    }

    delete(key) {
        this.storage.removeItem(key);
    }
}

const storage = new Storage(localStorage);

export default storage;