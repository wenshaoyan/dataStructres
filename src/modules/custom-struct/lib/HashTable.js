/**
 * Created by wenshao on 2017/7/23.
 * 散列表
 */
'use strict';


const HashTable = (function () {

    const _items = Symbol("_items");
    const _func_hash_code = Symbol("_func_hash_code");


    const hashCode = function (key) {
        let code = 5381;
        if (typeof key === "object") {
            return code;
        }
        if (key instanceof Number) {
            key += "";
        }
        for (let index = 0; index < key.length; index++) {
            code = code*33 + key.charCodeAt(index);
        }
        return code % 1013;

    };
    class HashTable {
        constructor() {
            this[_items] = [];
            this[_func_hash_code] = hashCode;
        }

        /**
         * 添加元素
         * @param key
         * @param value
         */
        put(key, value) {
            const position = this[_func_hash_code](key);
            this[_items][position] = value;

        }

        /**
         * 删除元素
         * @param key
         */
        remove(key) {
            const position = this[_func_hash_code](key);
            this[_items][position] = undefined;
        }

        /**
         * 获取值
         * @param key
         */
        get(key) {
            const position = this[_func_hash_code](key);
            return this[_items][position];
        }

        toString() {
            let data = "\n";
            let index = 0;
            for (let val of this[_items]) {
                if (val !== undefined){
                    data += "key="+index+",val="+val+"\n";
                }
                index++;
            }
            return data;
        }

    }
    return HashTable;
})();
module.exports = HashTable;
