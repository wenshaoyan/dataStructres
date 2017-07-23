/**
 * Created by wenshao on 2017/7/22.
 * 自定义集合
 */
'use strict';

const CustomSet = (function () {
    const _items = Symbol("_items");


    class CustomSet {
        constructor() {
            this[_items] = {};
        }

        /**
         * 按key添加
         * @param key
         */
        add(key) {
            if (!this.has(key)) {
                this[_items][key] = 0;
                return true;
            }
            return false;

        }

        /**
         * 按key删除
         * @param key
         */
        remove(key) {
            if (!this.has(key)) {
                delete this[_items][key];
                return true;
            }
            return false;
        }

        /**
         * 判断key是否存在
         * @param key
         */
        has(key) {
            return key in this[_items];
        }

        /**
         * 清空集合
         */
        clear() {
            this[_items] = {};
            return true;
        }

        /**
         * 返回集合元素个数
         * @return {number}
         */
        size() {
            return Object.keys(this[_items]).length;
        }

        /**
         * 集合的所有元素
         * @return {Arrar}  数组
         */
        values() {
            return Object.keys(this[_items]);
        }

        /**
         * 并集
         * @param set
         */
        union(set) {
            if (!set instanceof CustomSet) {
                return null;
            }
            const outputSet = new CustomSet();
            const values1 = this.values();
            for (let val of values1) {
                outputSet.add(val);
            }
            const values2 = set.values();
            for (let val of values2) {
                outputSet.add(val);
            }
            return outputSet;
        }

        /**
         * 交集
         * @param set
         */
        intersection(set) {
            if (!set instanceof CustomSet) {
                return null;
            }
            const outputSet = new CustomSet();
            const values1 = this.values();
            for (let val of values1) {
                if (set.has(val)) {
                    outputSet.add(val);
                }
            }
            return outputSet;
        }

        /**
         * 差集
         * @param set
         */
        diff(set) {
            if (!set instanceof CustomSet) {
                return null;
            }
            const outputSet = new CustomSet();
            const values1 = this.values();
            for (let val of values1) {
                if (!set.has(val)) {
                    outputSet.add(val);
                }
            }
            return outputSet;
        }

        /**
         * 差集
         * @param set
         */
        sub(set) {
            if (!set instanceof CustomSet) {
                return false;
            }
            if (this.size() > set.size()) {
                return false;
            }
            const outputSet = new CustomSet();
            const values1 = this.values();
            for (let val of values1) {
                if (!set.has(val)) {
                    return false;
                }
            }
            return true;
        }

    }
    return CustomSet;


})();
module.exports = CustomSet;