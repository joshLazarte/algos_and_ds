//allows duplicate keys, but only returns one
//only lowercase keys

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const idx = this._hash(key);
        if (!this.keyMap[idx]) {
            this.keyMap[idx] = [];
        }
        this.keyMap[idx].push([key, value]);
    }

    get(key) {
        const idx = this._hash(key);
        if (!this.keyMap[idx]) return undefined;
        const bucket = this.keyMap[idx];
        const flattened = [].concat(...bucket);
        const valueIdx = flattened.indexOf(key) + 1;
        return flattened[valueIdx];
    }

    keys() {
        const keys = [];
        this.keyMap.forEach(bucket => {
            bucket && bucket.forEach(pair => {
                !keys.includes(pair[0]) && keys.push(pair[0]);
            });
        });
        return keys;
    }

    values() {
        const values = [];
        this.keyMap.forEach(bucket => {
            bucket && bucket.forEach(pair => {
                !values.includes(pair[1]) && values.push(pair[1]);
            });
        });
        return values;
    }
}


//alternative get
// get(key) {
//     const idx = this._hash(key);
//     if (this.keyMap[idx]){
//         for(let i = 0; i < this.keyMap[idx].length; i++){
//             if(this.keyMap[idx][i][0] === key){
//                 return this.keyMap[idx][i][1]
//             }
//         }
//     }
//     return undefined;
// }

const table = new HashTable();

table.set('first', 'hello');
table.set('second', 'goodbye');
table.set('third', 'goodbye');


console.log(table.keyMap);
console.log(table.keys());
