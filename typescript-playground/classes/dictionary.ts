import { HashMap } from './hashmap';

export class Dictionary<T = number> {
    private hashMap: HashMap<T> = {};

    get(key: string) {
        return this.hashMap[key];
    }

    set(key: string, value: T) {
        this.hashMap[key] = value;
    }
}